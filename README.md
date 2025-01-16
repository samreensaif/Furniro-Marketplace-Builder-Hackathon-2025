"# Furniro-Marketplace-Builder-Hackathon-2025" 

# Day 1 Task: Laying the Foundation for Your Marketplace Journey

## Overview
This repository contains my completed task for Day 1 of the **Laying the Foundation for Your Marketplace Journey**. The task involved creating the foundational elements of a general e-commerce marketplace focused on household and office furniture. This includes outlining business goals, selecting a marketplace type, and designing a data schema with key fields and relationships between entities.

## Task Overview

### Step 1: Marketplace Type
- **Marketplace Type:** General E-Commerce
- **Primary Purpose:** A platform connecting buyers with high-quality household and office furniture. The platform offers durable, stylish, and affordable furniture with customization options.

### Step 2: Business Goals
- **Problem Solved:** 
  - Providing a one-stop solution for durable and stylish furniture.
  - Addressing functionality, aesthetics, and affordability needs.
  
- **Target Audience:** 
  - Homeowners
  - Office managers and business owners
  - Interior designers and architects

- **Offered Products and Services:**
  - Household and office furniture
  - Customization options
  - Delivery and installation services
  - Furniture bundles

- **Unique Selling Points:**
  - Quality assurance
  - Customization flexibility
  - Affordable pricing
  - Broad variety of styles and designs
  - Convenient platform with dedicated customer support

### Step 3: Data Schema
#### Entities in the Marketplace:
1. **Products:** ID, Name, Description, Price, Stock, Category, Material, Dimensions, Image URL, Customization Options.
2. **Orders:** Order ID, Customer ID, Order Date, Product Details (Product ID, Quantity), Total Price, Status, Payment Method.
3. **Customers:** Customer ID, Name, Email, Phone, Address, Registration Date.
4. **Delivery Zones:** Zone ID, Zone Name, Coverage Area, Assigned Drivers, Delivery Charges.


#### Relationships Between Entities:
- **Products → Orders:** Products can appear in multiple orders.
- **Orders → Customers:** An order is placed by one customer.
- **Delivery Zones → Orders:** Orders are associated with delivery zones based on shipping address.
- **Delivery Zones → Shipment:**


### Step 4: Diagram
The data schema diagram visualizes the relationships between the entities as follows:

![Data Schema Diagram 1](f1.jpeg)
![Data Schema Diagram 2](f2.jpeg)
![Data Schema Diagram 3](f3.jpeg)
![Data Schema Diagram 4](f4.jpeg)
![Data Schema Diagram 5](f5.jpeg)



# Furniro Marketplace Builder Hackathon 2025 - Day 2: Technical Foundation

## Goal:
The objective of Day 2 is to transition from business planning (Day 1) to creating a **technical foundation** for the Furniro Marketplace. This involves designing the system architecture, defining workflows, creating schemas, and specifying API requirements. The goal is to align the technical design with the business objectives to ensure the marketplace is scalable, efficient, and user-friendly.

---

## **Day 2 Deliverables**

### **1. eCommerce Schema**
- Developed schemas using **Sanity CMS** to manage:
  - Product data
  - Customer details
  - Order records
- Drafted detailed schema files to represent real-world data for seamless integration.

### **2. Marketplace Technical Foundation**
- Designed a **high-level system architecture**:
  - Frontend: Next.js
  - Backend: Sanity CMS
  - Third-Party APIs: ShipEngine for shipments, Stripe for payments.
- Defined workflows:
  - Product Browsing
  - Order Placement
  - Shipment Tracking
- Identified dependencies to streamline the implementation phase.

### **3. Third-Party API Documentation**
- Defined APIs for:
  - Product management via Sanity CMS
  - Payment processing using Stripe
  - Shipment tracking using ShipEngine
- Detailed API endpoints, methods, payloads, and sample responses.

---

## **System Architecture**
### Workflow Overview:
1. **Frontend (Next.js):**  
   A responsive UI for product browsing, cart management, and checkout.  
2. **Sanity CMS:**  
   Manages product data, order records, and customer details.  
3. **Third-Party APIs:**  
   - **ShipEngine** for shipment tracking  
   - **Stripe** for secure payment processing  

### Data Flow:
- User actions on the frontend trigger API calls to Sanity CMS for product and order data.
- Payment and shipment details are handled by Stripe and ShipEngine, respectively, with seamless integration.

---

## **Technical Documentation**
Refer to the following PDF files for detailed documentation:  
1. **eCommerce Schema:** Detailed schemas for Sanity CMS.  
2. **Marketplace Technical Foundation:** High-level architecture and workflows.  
3. **Third-Party API:** API documentation for integrations with ShipEngine and Stripe.  

### **GitHub Repository**  
Access the full project files, schemas, and documentation on GitHub:  
[Furniro Marketplace Builder Hackathon 2025](https://github.com/samreensaif/Furniro-Marketplace-Builder-Hackathon-2025.git)

---

## **Next Steps**
- Begin implementation on Day 3, focusing on frontend integration with Sanity CMS and third-party APIs.
- Regularly test and validate workflows to ensure functionality.

---

## **Acknowledgments**
Special thanks to mentors and collaborators for their guidance and feedback in refining the technical foundation.

---

