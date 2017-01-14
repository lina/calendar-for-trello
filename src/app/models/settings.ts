import {CalendarType} from "../redux/actions/settings-actions";
export class Settings {
  public observerMode: boolean = true;
  public boardColorPrefs: Object = {};
  public boardVisibilityPrefs: Object = {};
  public language: any;
  public type: CalendarType = CalendarType.Month;
}
