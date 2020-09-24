import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import ProvidersController from '../controller/ProvidersController';
import ProviderMonthAvailabillityController from '../controller/ProviderMonthAvailabillityController';
import ProviderDaiAvailabillityController from '../controller/ProviderDaiAvailabillityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabillityController = new ProviderMonthAvailabillityController();
const providerDaiAvailabillityController = new ProviderDaiAvailabillityController();

providersRouter.use(ensureAuthenticate);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required() },
  }),
  providerMonthAvailabillityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: { provider_id: Joi.string().uuid().required() },
  }),
  providerDaiAvailabillityController.index,
);

export default providersRouter;
