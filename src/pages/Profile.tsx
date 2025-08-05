import { useState } from 'react';
import { User, MapPin, Settings, Shield, Plus, Edit2, Trash2 } from 'lucide-react';
import { useAuth, Address } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export const Profile = () => {
  const { user, updateProfile, addAddress, updateAddress, deleteAddress } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showAddressDialog, setShowAddressDialog] = useState(false);

  // Profile form state
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Address form state
  const [addressData, setAddressData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    isDefault: false
  });

  const resetAddressForm = () => {
    setAddressData({
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'USA',
      isDefault: false
    });
    setEditingAddress(null);
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate passwords if changing
      if (profileData.newPassword) {
        if (profileData.newPassword !== profileData.confirmPassword) {
          toast({
            title: "Error",
            description: "Las contraseñas no coinciden.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        if (profileData.newPassword.length < 8) {
          toast({
            title: "Error",
            description: "La nueva contraseña debe tener al menos 8 caracteres.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
      }

      const success = await updateProfile({
        name: profileData.name
      });

      if (success) {
        toast({
          title: "Perfil actualizado",
          description: "Tu información ha sido actualizada correctamente.",
        });
        // Clear password fields
        setProfileData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el perfil.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let success = false;
      
      if (editingAddress) {
        success = await updateAddress(editingAddress.id, addressData);
      } else {
        success = await addAddress(addressData);
      }

      if (success) {
        toast({
          title: editingAddress ? "Dirección actualizada" : "Dirección agregada",
          description: editingAddress 
            ? "La dirección ha sido actualizada correctamente."
            : "La nueva dirección ha sido agregada.",
        });
        setShowAddressDialog(false);
        resetAddressForm();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo guardar la dirección.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const success = await deleteAddress(addressId);
      if (success) {
        toast({
          title: "Dirección eliminada",
          description: "La dirección ha sido eliminada correctamente.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar la dirección.",
        variant: "destructive",
      });
    }
  };

  const openEditAddress = (address: Address) => {
    setEditingAddress(address);
    setAddressData({
      name: address.name,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country,
      isDefault: address.isDefault
    });
    setShowAddressDialog(true);
  };

  if (!user) {
    return <div>No autorizado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Mi Perfil</h1>
          <p className="text-muted-foreground mt-2">
            Gestiona tu información personal y configuración de cuenta
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Información Personal
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Direcciones
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configuración
            </TabsTrigger>
          </TabsList>

          {/* Profile Information */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>
                  Actualiza tu información personal y contraseña
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        disabled
                        className="bg-muted"
                      />
                      <p className="text-xs text-muted-foreground">
                        El email no se puede cambiar
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Cambiar Contraseña</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña Actual</Label>
                        <Input
                          id="current-password"
                          type="password"
                          value={profileData.currentPassword}
                          onChange={(e) => setProfileData({ ...profileData, currentPassword: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva Contraseña</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={profileData.newPassword}
                          onChange={(e) => setProfileData({ ...profileData, newPassword: e.target.value })}
                          minLength={8}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={profileData.confirmPassword}
                          onChange={(e) => setProfileData({ ...profileData, confirmPassword: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Actualizando..." : "Actualizar Perfil"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses */}
          <TabsContent value="addresses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Mis Direcciones</CardTitle>
                  <CardDescription>
                    Gestiona tus direcciones de envío
                  </CardDescription>
                </div>
                <Dialog open={showAddressDialog} onOpenChange={setShowAddressDialog}>
                  <DialogTrigger asChild>
                    <Button onClick={resetAddressForm}>
                      <Plus className="h-4 w-4 mr-2" />
                      Agregar Dirección
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        {editingAddress ? 'Editar Dirección' : 'Nueva Dirección'}
                      </DialogTitle>
                      <DialogDescription>
                        {editingAddress 
                          ? 'Actualiza los datos de tu dirección'
                          : 'Agrega una nueva dirección de envío'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddressSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address-name">Nombre de la Dirección</Label>
                        <Input
                          id="address-name"
                          placeholder="Casa, Oficina, etc."
                          value={addressData.name}
                          onChange={(e) => setAddressData({ ...addressData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address-street">Dirección</Label>
                        <Input
                          id="address-street"
                          placeholder="Calle, número, apartamento"
                          value={addressData.street}
                          onChange={(e) => setAddressData({ ...addressData, street: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address-city">Ciudad</Label>
                          <Input
                            id="address-city"
                            value={addressData.city}
                            onChange={(e) => setAddressData({ ...addressData, city: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address-state">Estado/Provincia</Label>
                          <Input
                            id="address-state"
                            value={addressData.state}
                            onChange={(e) => setAddressData({ ...addressData, state: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address-zip">Código Postal</Label>
                          <Input
                            id="address-zip"
                            value={addressData.zipCode}
                            onChange={(e) => setAddressData({ ...addressData, zipCode: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address-country">País</Label>
                          <Select 
                            value={addressData.country} 
                            onValueChange={(value) => setAddressData({ ...addressData, country: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USA">Estados Unidos</SelectItem>
                              <SelectItem value="MX">México</SelectItem>
                              <SelectItem value="CA">Canadá</SelectItem>
                              <SelectItem value="ES">España</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="is-default"
                          checked={addressData.isDefault}
                          onCheckedChange={(checked) => setAddressData({ ...addressData, isDefault: !!checked })}
                        />
                        <Label htmlFor="is-default">Establecer como dirección predeterminada</Label>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button type="submit" disabled={isLoading} className="flex-1">
                          {isLoading ? "Guardando..." : (editingAddress ? "Actualizar" : "Agregar")}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowAddressDialog(false)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {user.addresses && user.addresses.length > 0 ? (
                  <div className="grid gap-4">
                    {user.addresses.map((address) => (
                      <Card key={address.id} className="relative">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{address.name}</h4>
                                {address.isDefault && (
                                  <Badge variant="secondary">Predeterminada</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {address.street}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {address.city}, {address.state} {address.zipCode}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {address.country}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => openEditAddress(address)}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteAddress(address.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No tienes direcciones guardadas.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configuración</CardTitle>
                <CardDescription>
                  Personaliza tu experiencia de compra
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notificaciones</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Ofertas y promociones</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones sobre ofertas especiales
                        </p>
                      </div>
                      <Checkbox />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Actualizaciones de pedidos</Label>
                        <p className="text-sm text-muted-foreground">
                          Estados de envío y entrega
                        </p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Preferencias</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Idioma</Label>
                      <Select defaultValue="es">
                        <SelectTrigger className="w-48 mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Moneda</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger className="w-48 mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="mxn">MXN ($)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium text-destructive flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Zona de Peligro
                  </h3>
                  <div className="space-y-3">
                    <Button variant="destructive" className="w-full sm:w-auto">
                      Eliminar Cuenta
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Esta acción no se puede deshacer. Se eliminarán todos tus datos permanentemente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};