// <--------------------de-structure of Object--------------------->

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh Sir"
}

const {courseInstructor:instructor, price} = course;
console.log(instructor);                                       //return Hitesh Sir
console.log(price);                                            //return 999


/* <--------------------API AND JSON-------------------------->
 most api are written in json(javascript object notation) formate

1.api Object JSON Format
This format is used when the response represents a single item (e.g., one user, one product).
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

 2. api in Array JSON Format
    This format is used when the response contains multiple items (e.g., a list of users, products)
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  {
    "id": 3,
    "name": "Alice Brown",
    "email": "alice@example.com"
  }
]
    */
