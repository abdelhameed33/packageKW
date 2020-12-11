import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routingAnimation = trigger('routing', [
  transition('* <=> *', [
    style({ transform: 'translateY(100%)' }),
    animate('0.3s ease-in-out', style({ transform: 'translateY(0%)' })),
  ]),
]);
