export default function Clock ({time}) {
  let hours = time.getHours();
  let className1;
  
    if (hours >= 0 && hours <= 6){
      className1 = 'night';
    } else {
      className1 = 'day';
    }

  return (
    <h1 className= {className1}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

