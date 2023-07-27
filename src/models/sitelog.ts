class SiteLog {
  id: string;
  site: string;
  date: string;
  time: string;

  constructor(siteLocationLog: string, dateLog: string, timeLog: string) {
    this.id = new Date().toISOString();
    this.site = siteLocationLog;
    this.date = dateLog;
    this.time = timeLog;
  }
}

export default SiteLog;
