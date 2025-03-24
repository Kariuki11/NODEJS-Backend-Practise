import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import Task from '../src/models/Task';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  beforeEach(async () => {
    await Task.deleteMany({});
  });

  it('should create a new task', async () => {
    const res = await chai
      .request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'Test Description' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('_id');
  });

  it('should get all tasks', async () => {
    await Task.create({ title: 'Task 1', description: 'Description 1' });
    const res = await chai.request(app).get('/api/tasks');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.equal(1);
  });
});













// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../src/app';
// import { Task } from '../src/models/task';

// chai.use(chaiHttp);

// describe('Task API', () => {
//     beforeEach(async () => {
//         await Task.deleteMany({});
//     });

//     it ('should create a new task', async () => {
//         const res = await chai
//             .request(app)
//             .post('/api/tasks')
//             .send({ title: 'Test Task', description: 'Test Description' });
//         expect(res.status).to.equal(201);
//         expect(res.body).to.have.property('_id');
//     });

//     it('Should get all tasks', async () => {
//         await Task.create({ title: 'Task1', description: 'Description1' });
//         const res = await chai.request(app).get('/api/tasks');
//         expect(res.status).to.equal(200);
//         expect(res.body.length).to.equal(1);
//     });
// });