# BootCamp-Add-Sum

## Restrictions: Disconnect from corporate VPN 
**Corporate firewall blocks port and gives "McAfee Web Gateway - Notification"**

## Specification:
An "add-ten" app

Backend framework and language of your choice, or get creative in how you do this.

Application has a route defined, which takes single numeric parameter num.

Returns a JSON object, with a single key sum, whose value is the sum of num and 10.

## Running and install
**Note:** Temporarily will be hosted on plexpi.net:4000

`git clone https://github.com/tcox42/BootCamp-Add-Sum.git && cd BootCamp-Add-Sum`

`npm install`

`npm start`


## Usage:

``curl http://plexpi.net:4000/7``
* Where 7 is any +/- integer

**Response**

```
{
   "sum": "17"
}
 ```
**Another Example**

`curl http://plexpi.net:4000/-3`

**Response**

`{"sum":7}`
