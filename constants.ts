
import { Sweet, User, UserRole } from './types';

export const INITIAL_SWEETS: Sweet[] = [
  { 
    id: '1', 
    name: 'Kaju Katli', 
    category: 'Cashew', 
    unit: 'kg', 
    description: 'A classic treat made with premium cashews and a hint of saffron.',
    imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '2', 
    name: 'Motichoor Ladoo', 
    category: 'Ladoo', 
    unit: 'kg', 
    description: 'Delicate gram flour pearls fried in pure ghee and soaked in sugar syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1621459548400-33bc5244ca81?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '3', 
    name: 'Gulab Jamun', 
    category: 'Syrup', 
    unit: 'box', 
    description: 'Soft, melt-in-the-mouth milk solid balls immersed in rose-scented syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1594142340532-613d94943f55?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '4', 
    name: 'Rasgulla', 
    category: 'Syrup', 
    unit: 'box', 
    description: 'Spongy chhena dumplings boiled in light sugar syrup for a refreshing bite.',
    imageUrl: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '5', 
    name: 'Pista Roll', 
    category: 'Dry Fruit', 
    unit: 'kg', 
    description: 'Elegant rolls filled with crushed pistachios and wrapped in cashew fudge.',
    imageUrl: 'https://images.unsplash.com/photo-1589119671195-12ee182a1c93?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '6', 
    name: 'Besan Ladoo', 
    category: 'Ladoo', 
    unit: 'kg', 
    description: 'Nutty gram flour balls roasted to perfection with cardamom and ghee.',
    imageUrl: 'https://images.unsplash.com/photo-1605192554106-d549b1b975cd?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '7', 
    name: 'Milk Cake', 
    category: 'Dairy', 
    unit: 'tray', 
    description: 'Granular milk reduction caramelized for a rich, deep dairy flavor.',
    imageUrl: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: '8', 
    name: 'Dhoda Burfi', 
    category: 'Dairy', 
    unit: 'kg', 
    description: 'Traditional Punjabi sweet made with germinated wheat and lots of dry fruits.',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400'
  }
];

export const CATEGORIES = [
  'All',
  'Cashew',
  'Ladoo',
  'Syrup',
  'Dry Fruit',
  'Dairy',
  'Ghee'
];

export const INITIAL_ADMIN: User = {
  id: 'admin-1',
  username: 'admin',
  name: 'Operations Manager',
  role: UserRole.ADMIN,
  password: 'password123',
  status: 'active',
  createdAt: new Date().toISOString()
};
