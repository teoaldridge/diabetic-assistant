import classes from "./SiteLogItem.module.css";

const SiteLogItem: React.FC<{
  site: string;
  date: string;
  time: string;
}> = (props) => {
  return (
    <li className={classes.logitem}>
      {props.site} {props.date} {props.time}
    </li>
  );
};

export default SiteLogItem;
