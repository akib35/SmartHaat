# SmartHaat - Livestock Ecommerce Platform
---
Welcome to our Livestock Ecommerce Platform ***SmartHaat***, developed as part of our academic course "Internet Programming". This project is built using Vue.js for the front end and Django for the back end.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Project Overview
Our SmartHaat is a small web app that is developed systematically using modern web technologies in step by step, such as--
* Requirement Gathering
* Planning
* Designing
* Modeling
* Coding
Although, there are much more aspects such as testing, evaluating, verification and validation of which some parts are done partially because of the limitation in resource.

Practically, our aim is to provide a complete path of development of a platform for seamless buying and selling experience for livestock. This platform is designed to cater to farmers, livestock traders, and agricultural enthusiasts.

### Features 
- **Product Listings:** Browse livestock listings with detailed descriptions and images.
  - **Search and Filter:** Advanced search and filtering options to find specific livestock.
  - **Shopping Cart:** Add livestock to the cart and manage purchases.
  - **Order Management:** Track order history and order statuses.
- **User Authentication:** Sign up, login, and manage user profiles.
- **Admin Panel:** Manage users, listings, and orders.
- **Scholar point:** Various information from renowned scholars.
- **Payment Gateway:** Online payment system


### Technology Stack
- **Front End:** Vue.js
- **Back End:** Django, Django REST
- **Database:** SQLite 
- **Authentication:** Django Rest Framework (DRF) with JWT
- **Styling:** CSS3
- **APIs:** RESTful API

## Project Structure
```
└── design 0.1
└── design 0.2
└── .git
└── proposal
└── smart_haat1
│   └── Django Api
│   └── public
│   └── src

```

### Installation
#### Prerequisites
- Node.js(12.x or higher)
- Python(v3.8 or higher)
- Git

#### Clone the Repository
~~~bash
git clone https://github.com/akib35/SmartHaat.git
cd SmartHaat
~~~

#### Back End Setup
1. Create a Virtual environment
	~~~bash
	cd smart_haat1/Django\ Api/hat
	python -m venv env
	source env/bin/activate 
	~~~
2. Install dependencies
	~~~bash
	pip install -r requirements.txt
	~~~
3. Run migrations
	~~~bash
	python manage.py migrate
	~~~
4. Create a superuser
	~~~bash
	python manage.py createsuperuser
	~~~
5. Start the Django server
	~~~bash
	python manage.py runserver
	~~~

#### Front End Setup
1. Navigate to the Dir
	~~~bash
	cd smart_haat1
	~~~
2. Install dependencies
	~~~bash
	npm install
	~~~
3. Start the Vue server
	~~~bash
	npm run serve
	~~~

### Usage
1. Open your web browser and navigate to http://localhost:8000 for the Django admin panel.
2. Access the Vue.js front end at http://localhost:8080.
3. Register a new user account or login with your credentials.
4. Browse livestock listings, add items to your cart, and proceed to checkout.

### Contributing 
This platform is developed as study or academic purpose. The aim of the course was mainly focused on the procedure of development of WebApps thus contribution to this project is limited.

### License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for more details.

---

Thank you for being interested in our Platform! If you have any questions, please feel free to contact us.
