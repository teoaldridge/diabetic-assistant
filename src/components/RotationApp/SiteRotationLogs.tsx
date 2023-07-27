import SiteLog from "../../models/sitelog";
import SiteLogItem from "./SiteLogItem";
import classes from "./SiteRotationLogs.module.css";

const SiteRotationLogs: React.FC<{
  logs: SiteLog[];
}> = (props) => {
  return (
    <ul className={classes.logs}>
      {props.logs.map((log) => (
        <SiteLogItem
          key={log.id}
          site={log.site}
          date={log.date}
          time={log.time}
        />
      ))}
    </ul>
  );
};

export default SiteRotationLogs;
