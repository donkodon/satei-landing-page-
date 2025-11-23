import { LucideIcon } from 'lucide-react';

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    icon?: LucideIcon;
}

export interface ServiceFlow {
    title: string;
    description: string;
    steps: string[];
    icon: LucideIcon;
    color: string;
}

export interface AppraisalResult {
    minPrice: string;
    maxPrice: string;
    comment: string;
}

export interface PurchaseItem {
    id: string;
    brand: string;
    name: string;
    price: string;
    image: string;
    category: string;
    diff?: string; // Optional field for "UP" percentage or amount
}