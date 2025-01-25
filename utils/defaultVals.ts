import { faker } from '@faker-js/faker';

const statuses = ['active', 'inactive'];
const paymentStatuses = ['paid', 'unpaid', 'overdue'];
const actions = ['login', 'logout', 'update', 'delete'];

const tableDataArray: Array<TableDataArray> = [];

for (let i = 2; i <= 277; i++) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = (`${firstName}.${lastName}@email.com`).toLowerCase();
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const lastLogin = faker.date.past().toISOString().split('T')[0];
  const paymentStatus = paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];
  const paymentAmount = Math.floor(Math.random() * 9000 + 1000);
  const paymentDueDate = faker.date.future().toISOString().split('T')[0];
  const activityLogs = Array.from({ length: Math.floor(Math.random() * 5) }, () => ({
    date: faker.date.past().toISOString().split('T')[0],
    action: actions[Math.floor(Math.random() * actions.length)],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
  }));

  tableDataArray.push({
    id: i,
    first_name: firstName,
    last_name: lastName,
    email: email,
    status: status,
    last_login: lastLogin,
    payment: {
      status: paymentStatus,
      amount: paymentAmount,
      due_date: paymentDueDate,
      currency: 'USD'
    },
    activity_logs: activityLogs
  });
}

const defaultVals = {
  tableDataArray
};

export default defaultVals;