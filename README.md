# Agriculture Admin Dashboard API
## Start Project
---
Clone or Fork the project
- HTTPS
````
git clone https://siemhongem@bitbucket.org/class-wmad/agro-admin-api.git
````
- SSH
````
git clone git@bitbucket.org:class-wmad/agro-admin-api.git
````
Install dependencies:
````
$ npm install
````
Create .env file in agro-admin-api folder
````
DATABASE_URL="postgresql://username:password@host_name:port/your_db"
PORT=3000
````
Example:
````
DATABASE_URL="postgresql://postgres:123456@localhost:5432/test_db"
PORT=3000
````
Start the server:
````
$ npm start
````
View the website at: http://localhost:3000

## Endpoints

### Summary Endpoints

#### Get total farmers

-**Endpoint:** `/api/summary/total-farmers`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{"totalFarmers":13}
```

#### Get total farmlands

-**Endpoint:** `/api/summary/total-farmlands`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{"totalFarmlands":13}
```

#### Get total active crop cycle

-**Endpoint:** `/api/summary/active-crop-cycles`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{"activeCropCycles":12}
```

#### Get total farmland size

-**Endpoint:** `/api/summary/total-farmland-size`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{"totalFarmlandSize":1450}
```

### Farmer Endpoints

#### Get all farmers

-**Endpoint:** `/api/farmers`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
[
  {
    "id": 1,
    "id_card": "F123456",
    "first_name": "John",
    "last_name": "Doe",
    "gender": "Male",
    "phone": "+85512345678",
    "source": "Amru Rice",
    "registered_by": 1,
    "district_id": 1
  }
]
```

#### Get a farmer

-**Endpoint:** `/api/farmers/{id}`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{
  "id": 1,
  "id_card": "F123456",
  "first_name": "John",
  "last_name": "Doe",
  "gender": "Male",
  "phone": "+85512345678",
  "source": "Amru Rice",
  "registered_by": 1,
  "district_id": 1
}
```

#### Create a farmer

-**Endpoint:** `/api/farmers`
-**Method:** `POST`
-**Request Header:**
-**Request Body:**
```json
{
  "id_card": "F9900008",
  "first_name": "Dara",
  "last_name": "PIN",
  "gender": "Male",
  "phone": "+8558888897",
  "source": "District Administration",
  "registered_by": 2,
  "district_id": 4
}
```
-**Response:**
```
{
  "id": 6,
  "id_card": "F9900008",
  "first_name": "Dara",
  "last_name": "PIN",
  "gender": "Male",
  "phone": "+8558888897",
  "source": "District Administration",
  "registered_by": 2,
  "district_id": 4
}
```

#### Update a farmer

-**Endpoint:** `/api/farmers/{id}`
-**Method:** `PUT`
-**Request Header:**
-**Request Body:**
```json
{
  "id_card": "F123458",
  "first_name": "Siemhong",
  "last_name": "Em",
  "gender": "Male",
  "phone": "+85512345678",
  "source": "",
  "registered_by": 3,
  "district_id": 1
}
```
-**Response:**
```
{
  "id": 4,
  "id_card": "F123458",
  "first_name": "Siemhong",
  "last_name": "Em",
  "gender": "Male",
  "phone": "+85512345678",
  "source": "",
  "registered_by": 3,
  "district_id": 1
}
```

#### Delete a farmer

-**Endpoint:** `/api/farmers/{id}`
-**Method:** `DELETE`
-**Request Header:**
-**Response:**
```
{
  "message": "Farmer deleted successfully"
}
```

#### Get all farmlands

-**Endpoint:** `/api/farmlands`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
[
  {
    "id": 1,
    "size": 100,
    "latitude": 13.0957,
    "longitude": 103.2022,
    "farmer_id": 1,
    "status": "Active"
  },
  {
    "id": 2,
    "size": 150,
    "latitude": 13.0957,
    "longitude": 103.2022,
    "farmer_id": 2,
    "status": "Active"
  },
  {
    "id": 3,
    "size": 200,
    "latitude": 10.6194,
    "longitude": 104.1669,
    "farmer_id": 3,
    "status": "Inactive"
  }
]
```

#### Get a farmland

-**Endpoint:** `/api/farmlands/{id}`
-**Method:** `GET`
-**Request Header:**
-**Response:**
```
{
  "id": 2,
  "size": 150,
  "latitude": 13.0957,
  "longitude": 103.2022,
  "farmer_id": 2,
  "status": "Active"
}
```

#### Create a farmland

-**Endpoint:** `/api/farmlands`
-**Method:** `POST`
-**Request Header:**
-**Request Body:**
```json
{
  "size": 1000,
  "latitude": 13.0957,
  "longitude": 103.2022,
  "farmer_id": 2,
  "status": "Active"
}
```
-**Response:**
```
{
  "id": 4,
  "size": 1000,
  "latitude": 13.0957,
  "longitude": 103.2022,
  "farmer_id": 2,
  "status": "Active"
}
```

#### Update a farmer

-**Endpoint:** `/api/farmlands/{id}`
-**Method:** `PUT`
-**Request Header:**
-**Request Body:**
```json
{
  "size": 1000,
  "latitude": 13.0957,
  "longitude": 103.2022,
  "farmer_id": 2,
  "status": "Inactive"
}
```
-**Response:**
```
{
    "id": 4,
    "size": 1000,
    "latitude": 13.0957,
    "longitude": 103.2022,
    "farmer_id": 2,
    "status": "Inactive"
}
```

#### Delete a farmland

-**Endpoint:** `/api/farmlands/{id}`
-**Method:** `DELETE`
-**Request Header:**
-**Response:**
```
{
  "message": "Farmland deleted successfully"
}
```