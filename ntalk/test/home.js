const express = require('../config/express')();
const request = require('supertest')(express);

describe('#HomeController', () => {

    it('#GET "/" return status 200', done => {
        request.get('/')
            .end((err, res) => {
                res.status.should.eql(200);
                done();
            });
    });

    it('#GET "/logout" redirect to "/"', done => {
        request.get('/logout')
            .end((err, res) => {
                res.headers.location.should.eql('/');
                done();
            });
    });

    it('#POST "/login" redirect to "/constacts"', done => {
        const user = {email: 'test@gmail.com', password: '123'};
        request.post('/login')
            .send({user})
            .end((err, res) => {
                res.headers.location.should.eql('/contacts');
                done();
            });
    });

    it('#POST "/login" invalid user redirect to "/"', done => {
        const user = {email: '', password: ''};
        request.post('/login')
            .send({user})
            .end((err, res) => {
                res.headers.location.should.eql('/');
                done();
            });
    });
});