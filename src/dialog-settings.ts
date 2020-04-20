import type { ViewStrategy } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';

export type ActionKey = 'Escape' | 'Enter';

/**
 * All available dialog settings.
 */
export interface DialogSettings {
  [setting: string]: any;

  /**
   * The view model url, constructor or instance for the dialog.
   */
  viewModel?: string | { new (...params: any[]): object } | object;

  /**
   * The view url or view strategy to override the default view location convention.
   */
  view?: string | ViewStrategy;

  /**
   * Data to be passed to the "activate" hook on the view model.
   */
  model?: any;

  /**
   * The element that will parent the dialog.
   */
  host?: Element;

  /**
   * When set to "false" allows the dialog to be closed with ESC key or clicking outside the dialog.
   * When set to "true" the dialog does not close on ESC key or clicking outside of it.
   */
  lock?: boolean;

  /**
   * Allows for closing the top most dialog via the keyboard.
   * When set to "false" no action will be taken.
   * If set to "true", "Escape" or an array containing "Escape"
   * the dialog will be "cancel" closed when the ESC key is pressed.
   * If set to "Enter" or and array containing "Enter"
   * the dialog will be "ok" closed  when the ENTER key is pressed.
   * Using the array format allows combining the ESC and ENTER keys.
   */
  keyboard?: boolean | ActionKey | ActionKey[];

  /**
   * When set to "true" allows for the dismissal of the dialog by clicking outside of it.
   */
  overlayDismiss?: boolean;

  /**
   * When set to true conveys a cancellation as a rejection.
   */
  rejectOnCancel?: boolean;

  /**
   * This function is called when a dialog closes to restore focus to the last
   * element that was focused when the dialog opened. It can be overridden in
   * general settings, or on a case by case basis by providing an override when
   * a particular dialog is opened.
   */
  restoreFocus?: (lastActiveElement: HTMLElement) => void;
}

/**
 * @internal
 */
export class DefaultDialogSettings implements DialogSettings {
  [setting: string]: any;
  public host = DOM.querySelector('body') as HTMLBodyElement;
  public lock = true;
  public rejectOnCancel = false;
}