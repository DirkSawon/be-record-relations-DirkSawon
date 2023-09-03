## Relations

Relations relation relations. The fact is that MongoDB is a NoSQL database. It means that it is non-relational, among other things. To implement a kind of relations between documents, we use references by IDs or embed documents directly. In the task we will update our code in order to create relations between our models. We can see that an order contains the id of a record but when we retreat an order we only see the id and not the data of the record as well. We will introduce one to ne and one to many relationships between our models and populate data when needed.

**Story**: Our client, the record store, would like to be able to have the addresses of each user in a spesific format. They would also like to see the data of a record when an order is being retrieved so they can make their shopping cart look nice.

**TODO**

1. Create a new schema called address containing a street and a city.
2. Connect the address schema with our user schema (1-to-1).
3. Using refs, connect the record schema with the order one (1-to-many).
