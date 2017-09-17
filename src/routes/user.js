import express from 'express';
const router = express.Router();

router.get('/users', (req, res) => {
	res.json([
		{ id: 98671797.34504788, firstName: 'Don', lastName: 'Adu', email: 'adudon@gmail.com' },
		{
			id: 52666928.67486901,
			firstName: 'Nillante',
			lastName: 'George',
			email: 'george@sing.com'
		},
		{ id: 89135101.7211922, firstName: 'James', lastName: 'Kafui', email: 'kafuijames@gmail.com' },
		{ id: 21820666.924216047, firstName: 'Abigail', lastName: 'Love', email: 'abilove@hlove.com' },
		{ id: 7973225.0141537925, firstName: 'Philip', lastName: 'Gbeho', email: 'gbehodom@things.com' }
	]);
});

export default router;
