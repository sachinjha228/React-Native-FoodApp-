import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YkUxBgUHWh3KaeOWcAh26BIeAhiGJ0wwJBJZMIqp70xiBAIIaEqI1kEO5GWTq1SP_166s4Q1ztPKGKUrAzaPhcEY7a7n0r3dGLKLiDOAdmjOGVxr4M55UZshJ-0JX3Yx'
    }
});


