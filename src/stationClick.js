export const handleStationClick = async (
  station,
  selectedLine,
  setSchedule
) => {
  const line = selectedLine; // Get the currently selected line
  const sta = station.code; // Get the station code
  const apiUrl = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${sta}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Extract UP and DOWN train schedules
    const upTrains = data.data[`${line}-${sta}`]?.UP || [];
    const downTrains = data.data[`${line}-${sta}`]?.DOWN || [];
    const currentTime = data.data[`${line}-${sta}`]["curr_time"];

    // Prepare the schedule object
    const schedule = {
      upTrains,
      downTrains,
      currentTime,
      message:
        upTrains.length > 0 || downTrains.length > 0
          ? null
          : "Not available now",
    };

    // Set the schedule state
    setSchedule(schedule);
  } catch (error) {
    console.error("Error fetching schedule:", error);
    return <p>Fail to fetching data.</p>;
  }
};
