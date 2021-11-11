() => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onDateChange}
      selectsStart
      startDate={startDate}
      showMonthDropdown={[true, true]}
      showYearDropdown
      endDate={endDate}
      minDate={startDate}
      monthsShown={2}
    >
      <div>hello</div>
    </DatePicker>
  );
};
