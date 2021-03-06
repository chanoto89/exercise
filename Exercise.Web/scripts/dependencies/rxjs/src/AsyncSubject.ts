import {Subject} from './Subject';
import {Subscriber} from './Subscriber';
import {Subscription} from './Subscription';

/**
 * @class AsyncSubject<T>
 */
export class AsyncSubject<T> extends Subject<T> {
  private value: T = null;
  private hasNext: boolean = false;
  private hasCompleted: boolean = false;

  protected _subscribe(subscriber: Subscriber<any>): Subscription {
    if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return Subscription.EMPTY;
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription.EMPTY;
    }

    return super._subscribe(subscriber);
  }

  next(value: T): void {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  }

  complete(): void {
    this.hasCompleted = true;
    if (this.hasNext) {
      super.next(this.value);
    }
    super.complete();
  }
}
