import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  addresses?: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  updateProfile: (data: Partial<User>) => Promise<boolean>;
  addAddress: (address: Omit<Address, 'id'>) => Promise<boolean>;
  updateAddress: (id: string, address: Partial<Address>) => Promise<boolean>;
  deleteAddress: (id: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock users data - In production, this would come from your backend
  const mockUsers: User[] = [
    {
      id: '1',
      email: 'admin@ecommerce.com',
      name: 'Admin User',
      role: 'admin',
      addresses: []
    },
    {
      id: '2',
      email: 'user@example.com',
      name: 'John Doe',
      role: 'user',
      addresses: [
        {
          id: '1',
          name: 'Home',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA',
          isDefault: true
        }
      ]
    }
  ];

  useEffect(() => {
    // Check for stored user in localStorage
    const storedUser = localStorage.getItem('ecommerce_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication - In production, make API call
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('ecommerce_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      addresses: []
    };

    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('ecommerce_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecommerce_user');
  };

  const updateProfile = async (data: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('ecommerce_user', JSON.stringify(updatedUser));
    return true;
  };

  const addAddress = async (address: Omit<Address, 'id'>): Promise<boolean> => {
    if (!user) return false;
    
    const newAddress: Address = {
      ...address,
      id: Date.now().toString()
    };

    const updatedUser = {
      ...user,
      addresses: [...(user.addresses || []), newAddress]
    };

    setUser(updatedUser);
    localStorage.setItem('ecommerce_user', JSON.stringify(updatedUser));
    return true;
  };

  const updateAddress = async (id: string, address: Partial<Address>): Promise<boolean> => {
    if (!user || !user.addresses) return false;
    
    const updatedAddresses = user.addresses.map(addr => 
      addr.id === id ? { ...addr, ...address } : addr
    );

    const updatedUser = {
      ...user,
      addresses: updatedAddresses
    };

    setUser(updatedUser);
    localStorage.setItem('ecommerce_user', JSON.stringify(updatedUser));
    return true;
  };

  const deleteAddress = async (id: string): Promise<boolean> => {
    if (!user || !user.addresses) return false;
    
    const updatedAddresses = user.addresses.filter(addr => addr.id !== id);
    const updatedUser = {
      ...user,
      addresses: updatedAddresses
    };

    setUser(updatedUser);
    localStorage.setItem('ecommerce_user', JSON.stringify(updatedUser));
    return true;
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};