const express = require('../config/express')();
const request = require('supertest')(express);

describe('#ContactController', () => {
    describe('#User no logged', () => {
        
        it('GET "/contacts redirect to "/"', done => {
            request.get('/contacts')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });
        
        it('GET "/contacts/1 redirect to "/"', done => {
            request.get('/contacts/1')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });

        it('GET "/contacts/1/edit redirect to "/"', done => {
            request.get('/contacts/1/edit')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });

        it('POST "/contacts redirect to "/"', done => {
            request.post('/contacts')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });

        it('DELETE "/contacts/1 redirect to "/"', done => {
            request.del('/contacts/1')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });

        it('PUT "/contacts/1 redirect to "/"', done => {
            request.put('/contacts/1')
                .end((err, res) => {
                    res.headers.location.should.eql('/');
                    done();
                });
        });
        
    });
});
