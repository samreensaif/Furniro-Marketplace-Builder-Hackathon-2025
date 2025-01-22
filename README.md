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
The data schema diagram visualizes the relationships between the entities are also avaiable in images folder





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

### Step 4: Diagram
The data schema diagram visualizes the relationships between the entities are also avaiable in images folder

## **Next Steps**
- Begin implementation on Day 3, focusing on frontend integration with Sanity CMS and third-party APIs.
- Regularly test and validate workflows to ensure functionality.

---

## **Acknowledgments**
Special thanks to mentors and collaborators for their guidance and feedback in refining the technical foundation.

---
# Furniro Marketplace Builder

This repository contains the **Furniro Marketplace Builder** project, which is a Next.js-based application built during the **Hackathon 2025**.

---

## Project Overview
Furniro Marketplace Builder is a web application designed to simplify the creation and management of online furniture marketplaces. It utilizes modern technologies like **Next.js**, **Sanity**, and **TailwindCSS** to deliver a seamless and responsive user experience.

### Live Links
- **GitHub Repository**: [Furniro Marketplace Builder GitHub](https://github.com/samreensaif/Furniro-Marketplace-Builder-Hackathon-2025.git)
- **Live Deployment**: [Furniro on Vercel](https://furniro-next-js.vercel.app/)

---

## Technologies Used
### Frontend
- **Next.js** (v15.1.5): Framework for building optimized React applications.
- **React** (v19.0.0): Component-based JavaScript library for user interfaces.
- **TailwindCSS** (v3.4.1): Utility-first CSS framework.

### Backend
- **Sanity**: Content management and API platform.

### Additional Libraries
- **Radix UI**: For accessible UI components.
- **EmailJS**: To manage email communication.
- **Embla Carousel**: For advanced carousel functionalities.
- **Jotai**: For state management.
- **Styled Components**: For component-level styling.
- **Axios**: For API integration.

---

## How to Run the Project Locally
1. Clone the repository:
    ```bash
    git clone https://github.com/samreensaif/Furniro-Marketplace-Builder-Hackathon-2025.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Furniro-Marketplace-Builder-Hackathon-2025
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env.local` file in the root directory.
    - Add the necessary environment variables (refer to `.env.example` if available).

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and visit:
    ```
    http://localhost:3000
    ```

---

## Deployment
The application is hosted on **Vercel**. The staging and production builds can be deployed using the following commands:

- Build:
    ```bash
    npm run build
    ```
- Start:
    ```bash
    npm run start
    ```

---

## Features
- **Dynamic Marketplace Builder**: Add, edit, and manage listings in real-time.
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS.
- **Carousel Integration**: Advanced product showcase using Embla Carousel.
- **Email Communication**: Integrated email functionality via EmailJS.
- **State Management**: Manage application state efficiently with Jotai.
- **Content Management**: Backed by Sanity CMS for dynamic content updates.

---

## Day 6 Checklist
- **Deployment Preparation**: ✔
- **Staging Environment Testing**: ✔
- **Documentation**: ✔
- **Form Submission**: ✔
- **Final Review**: ✔

---

## Contributing
We welcome contributions to enhance this project. Please follow the steps below:
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Your descriptive commit message"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
Special thanks to all participants and mentors of the **Hackathon 2025** for their guidance and support.

