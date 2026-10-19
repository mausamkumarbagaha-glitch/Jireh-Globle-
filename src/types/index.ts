export type PageId = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'wholesale' 
  | 'export' 
  | 'privatelabel' 
  | 'quality' 
  | 'packaging' 
  | 'blog' 
  | 'contact';

export type Currency = 'USD' | 'INR' | 'EUR' | 'AED' | 'GBP';

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  category: 'raw' | 'graded' | 'roasted' | 'flavored' | 'industrial';
  grade: string;
  sizeSuta: string;
  description: string;
  flavorProfile?: string;
  packagingOptions: string[];
  moq: string;
  shelfLife: string;
  origin: string;
  imageUrl: string;
  highlightBadge?: string;
  pricePerKgUSD: number;
  samplePriceUSD: number;
  specifications: {
    moisture: string;
    foreignMatter: string;
    brokenPercentage: string;
    proteinPer100g: string;
    fatPer100g: string;
    energyKcal: string;
  };
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productId: string;
  grade: string;
  quantityMetricTons: number;
  incoterm: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  destinationPort: string;
  packagingType: string;
  privateLabelNeeded: boolean;
  notes: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Nutrition' | 'Sourcing' | 'Grading' | 'Industry Insights' | 'Export Guide';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  type: 'sample' | 'retail_box';
}
