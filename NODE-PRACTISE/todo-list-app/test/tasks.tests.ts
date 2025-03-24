import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import { Task } from '../src/models/task';

chai.use(chaiHttp);

describe('Task API', () => {
    beforeEach(async () => {
        await Task.deleteMany({});
    });

    it ('should create a new task', async () => {
        const res = await chai
            .request(app)
            .post('/api/tasks')
            .send({ title: 'Test Task', description: 'Test Description' });
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('_id');
    });
})