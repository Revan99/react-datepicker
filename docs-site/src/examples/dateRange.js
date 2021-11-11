() => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        selectsStart
        selectsRange
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        monthsShown={2}
        HoursComponent={() => <div>Hello world!</div>}
      >
        <div>hello</div>
      </DatePicker>
    </>
  );
};
