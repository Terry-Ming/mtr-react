import "./App.css";
import { useState } from "react";
import Header from "./header";
import StationList from "./StationList";
import { handleStationClick } from "./stationClick";

const info = {
  KTL: {
    text: "觀塘線",
    color: "#7ed957",
    UP: ["調景嶺"],
    DOWN: ["黃埔"],

    sta: [
      { code: "WHA", name: "Whampoa", chinese: "黃埔" },
      { code: "HOM", name: "Ho Man Tin", chinese: "何文田" },
      { code: "YMT", name: "Yau Ma Tei", chinese: "油麻地" },
      { code: "MOK", name: "Mong Kok", chinese: "旺角" },
      { code: "PRE", name: "Prince Edward", chinese: "太子" },
      { code: "SKM", name: "Shek Kip Mei", chinese: "石硤尾" },
      { code: "KOT", name: "Kowloon Tong", chinese: "九龍塘" },
      { code: "LOF", name: "Lok Fu", chinese: "樂富" },
      { code: "WTS", name: "Wong Tai Sin", chinese: "黃大仙" },
      { code: "DIH", name: "Diamond Hill", chinese: "鑽石山" },
      { code: "CHH", name: "Choi Hung", chinese: "彩虹" },
      { code: "KOB", name: "Kowloon Bay", chinese: "九龍灣" },
      { code: "NTK", name: "Ngau Tau Kok", chinese: "牛頭角" },
      { code: "KWT", name: "Kwun Tong", chinese: "觀塘" },
      { code: "LAT", name: "Lam Tin", chinese: "藍田" },
      { code: "YAT", name: "Yau Tong", chinese: "油塘" },
      { code: "TIK", name: "Tiu Keng Leng", chinese: "調景嶺" },
    ],
  },
  ISL: {
    text: "港島線",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town", chinese: "堅尼地城" },
      { code: "HKU", name: "HKU", chinese: "香港大學" },
      { code: "SYP", name: "Sai Ying Pun", chinese: "西營盤" },
      { code: "SHW", name: "Sheung Wan", chinese: "上環" },
      { code: "CEN", name: "Central", chinese: "中環" },
      { code: "ADM", name: "Admiralty", chinese: "金鐘" },
      { code: "WAC", name: "Wan Chai", chinese: "灣仔" },
      { code: "CAB", name: "Causeway Bay", chinese: "銅鑼灣" },
      { code: "TIH", name: "Tin Hau", chinese: "天后" },
      { code: "FOH", name: "Fortress Hill", chinese: "炮台山" },
      { code: "NOP", name: "North Point", chinese: "北角" },
      { code: "QUB", name: "Quarry Bay", chinese: "鰂魚涌" },
      { code: "TAK", name: "Tai Koo", chinese: "太古" },
      { code: "SWH", name: "Sai Wan Ho", chinese: "西灣河" },
      { code: "SKW", name: "Shau Kei Wan", chinese: "筲箕灣" },
      { code: "HFC", name: "Heng Fa Chuen", chinese: "杏花邨" },
      { code: "CHW", name: "Chai Wan", chinese: "柴灣" },
    ],
    UP: ["柴灣"],
    DOWN: ["堅尼地城"],
  },
  TWL: {
    text: "荃灣線",
    color: "#ff3131",
    UP: ["荃灣"],
    DOWN: ["中環"],

    sta: [
      { code: "CEN", name: "Central", chinese: "中環" },
      { code: "ADM", name: "Admiralty", chinese: "金鐘" },
      { code: "TST", name: "Tsim Sha Tsui", chinese: "尖沙咀" },
      { code: "JOR", name: "Jordan", chinese: "佐敦" },
      { code: "YMT", name: "Yau Ma Tei", chinese: "油麻地" },
      { code: "MOK", name: "Mong Kok", chinese: "旺角" },
      { code: "PRE", name: "Price Edward", chinese: "太子" },
      { code: "SSP", name: "Sham Shui Po", chinese: "深水埗" },
      { code: "CSW", name: "Cheung Sha Wan", chinese: "長沙灣" },
      { code: "LCK", name: "Lai Chi Kok", chinese: "荔枝角" },
      { code: "MEF", name: "Mei Foo", chinese: "美孚" },
      { code: "LAK", name: "Lai King", chinese: "茘景" },
      { code: "KWF", name: "Kwai Fong", chinese: "葵芳" },
      { code: "KWH", name: "Kwai Hing", chinese: "葵興" },
      { code: "TWH", name: "Tai Wo Hau", chinese: "大窩口" },
      { code: "TSW", name: "Tsuen Wan", chinese: "荃灣" },
    ],
  },
  SIL: {
    text: "南港島線",
    color: "#cbcd09",
    UP: ["海怡半島"],
    DOWN: ["金鐘"],
    sta: [
      { code: "ADM", name: "Admiralty", chinese: "金鐘" },
      { code: "OCP", name: "Ocean Park", chinese: "海洋公園" },
      { code: "WCH", name: "Wong Chuk Hang", chinese: "黃竹坑" },
      { code: "LET", name: "Lei Tung", chinese: "利東" },
      { code: "SOH", name: "South Horizons", chinese: "海怡半島" },
    ],
  },
  TCL: {
    text: "東涌線",
    color: "#f6943d",
    UP: ["東涌"],
    DOWN: ["香港"],

    sta: [
      { code: "HOK", name: "Hong Kong", chinese: "香港" },
      { code: "KOW", name: "Kowloon", chinese: "九龍" },
      { code: "OLY", name: "Olympic", chinese: "奧運" },
      { code: "NAC", name: "Nam Cheong", chinese: "南昌" },
      { code: "LAK", name: "Lai King", chinese: "茘景" },
      { code: "TSY", name: "Tsing Yi", chinese: "青衣" },
      { code: "SUN", name: "Sunny Bay", chinese: "欣澳" },
      { code: "TUC", name: "Tung Chung", chinese: "東涌" },
    ],
  },
  EAL: {
    text: "東鐵線",
    color: "#5ce1e6",
    UP: ["落馬洲", "羅湖", "上水", "大埔墟", "馬場", "火炭", "沙田"],
    DOWN: ["金鐘", "紅磡", "旺角東"],

    sta: [
      { code: "ADM", name: "Admiralty", chinese: "金鐘" },
      { code: "EXC", name: "Exhibition Centre", chinese: "會展" },
      { code: "HUH", name: "Hung Hom", chinese: "紅磡" },
      { code: "MKK", name: "Mong Kok East", chinese: "旺角東" },
      { code: "KOT", name: "Kowloon Tong", chinese: "九龍塘" },
      { code: "TAW", name: "Tai Wai", chinese: "大圍" },
      { code: "SHT", name: "Sha Tin", chinese: "沙田" },
      { code: "FOT", name: "Fo Tan", chinese: "火炭" },
      { code: "RAC", name: "Racecourse", chinese: "馬場" },
      { code: "UNI", name: "University", chinese: "大學" },
      { code: "TAP", name: "Tai Po Market", chinese: "大埔墟" },
      { code: "TWO", name: "Tai Wo", chinese: "太和" },
      { code: "FAN", name: "Fanling", chinese: "粉嶺" },
      { code: "SHS", name: "Sheung Shui", chinese: "上水" },
      { code: "LOW", name: "Lo Wu", chinese: "羅湖" },
      { code: "LMC", name: "Lok Ma Chau", chinese: "落馬洲" },
    ],
  },
  TML: {
    text: "屯馬線",
    color: "#8d6019",
    UP: ["屯門"],
    DOWN: ["烏溪沙"],
    sta: [
      { code: "WKS", name: "Wu Kai Sha", chinese: "烏溪沙" },
      { code: "MOS", name: "Ma On Shan", chinese: "馬鞍山" },
      { code: "HEO", name: "Heng On", chinese: "恆安" },
      { code: "TSH", name: "Tai Shui Hang", chinese: "大水坑" },
      { code: "SHM", name: "Shek Mun", chinese: "石門" },
      { code: "CIO", name: "City One", chinese: "第一城" },
      { code: "STW", name: "Sha Tin Wai", chinese: "沙田圍" },
      { code: "CKT", name: "Che Kung Temple", chinese: "車公廟" },
      { code: "TAW", name: "Tai Wai", chinese: "大圍" },
      { code: "HIK", name: "Hin Keng", chinese: "顯徑" },
      { code: "DIH", name: "Diamond Hill", chinese: "鑽石山" },
      { code: "KAT", name: "Kai Tak", chinese: "啟德" },
      { code: "SUW", name: "Sung Wong Toi", chinese: "宋皇臺" },
      { code: "TKW", name: "To Kwa Wan", chinese: "土瓜灣" },
      { code: "HOM", name: "Ho Man Tin", chinese: "何文田" },
      { code: "HUH", name: "Hung Hom", chinese: "紅磡" },
      { code: "ETS", name: "East Tsim Sha Tsui", chinese: "尖東" },
      { code: "AUS", name: "Austin", chinese: "柯士甸" },
      { code: "NAC", name: "Nam Cheong", chinese: "南昌" },
      { code: "MEF", name: "Mei Foo", chinese: "美孚" },
      { code: "TWW", name: "Tsuen Wan West", chinese: "荃灣西" },
      { code: "KSR", name: "Kam Sheung Road", chinese: "錦上路" },
      { code: "YUL", name: "Yuen Long", chinese: "元朗" },
      { code: "LOP", name: "Long Ping", chinese: "朗屏" },
      { code: "TIS", name: "Tin Shui Wai", chinese: "天水圍" },
      { code: "SIH", name: "Siu Hong", chinese: "兆康" },
      { code: "TUM", name: "Tuen Mun", chinese: "屯門" },
    ],
  },
  AEL: {
    text: "機場快線",
    color: "#3d9ea0",
    UP: ["機場", "亞洲國際博覽館"],
    DOWN: ["香港"],
    sta: [
      { code: "HOK", name: "Hong Kong", chinese: "香港" },
      { code: "KOW", name: "Kowloon", chinese: "九龍" },
      { code: "TSY", name: "Tsing Yi", chinese: "青衣" },
      { code: "AIR", name: "Airport", chinese: "機場" },
      { code: "AWE", name: "AsiaWorld Expo", chinese: "博覽館" },
    ],
  },
  TKL: {
    text: "將軍澳線",
    color: "#8d45ab",
    UP: ["調景嶺"],
    DOWN: ["黃埔"],
    sta: [
      { code: "NOP", name: "North Point", chinese: "北角" },
      { code: "QUB", name: "Quarry Bay", chinese: "鰂魚涌" },
      { code: "YAT", name: "Yau Tong", chinese: "油塘" },
      { code: "TIK", name: "Tiu Keng Leng", chinese: "調景嶺" },
      { code: "TKO", name: "Tseung Kwan O", chinese: "將軍澳" },
      { code: "HAH", name: "Hang Hau", chinese: "坑口" },
      { code: "POA", name: "Po Lam", chinese: "寶琳" },
      { code: "LHP", name: "LOHAS Park", chinese: "康城" },
    ],
  },
};

function App() {
  const [selectedLine, setSelectedLine] = useState("");
  const [schedule, setSchedule] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

  const handleLineClick = (key) => {
    setSelectedLine(key); // Set the selected line
  };

  const handleStationSelect = (station) => {
    setSelectedStation(station); // Set the selected station
    handleStationClick(station, selectedLine, setSchedule); // Fetch schedule
  };

  return (
    <>
      <Header info={info} onLineClick={handleLineClick} />
      {selectedLine && (
        <div>
          <h2>{info[selectedLine].text}</h2>
          <StationList
            lineColor={info[selectedLine].color}
            stations={info[selectedLine].sta}
            onStationClick={handleStationSelect}
          />
        </div>
      )}
      {schedule && (
        <div>
          <div className="upSchedule">
            <h3>{selectedStation.chinese}</h3>
            <h3>最後更新時間:{schedule.currentTime}</h3>
            <h4>往{info[selectedLine].UP}</h4>
            {schedule.upTrains.length > 0 ? (
              schedule.upTrains.map((item, index) => (
                <div key={index} className="scheduleItem">
                  <p>
                    <strong>到達時間:</strong> {item.time}
                  </p>
                  <p>
                    <strong>到站月台:</strong> {item.plat}
                  </p>
                </div>
              ))
            ) : (
              <p>{schedule.message}</p>
            )}
          </div>
          <div className="downSchedule">
            <h4>往{info[selectedLine].DOWN}</h4>
            {schedule.downTrains.length > 0 ? (
              schedule.downTrains.map((item, index) => (
                <div key={index} className="scheduleItem">
                  <p>
                    <strong>到達時間:</strong> {item.time}
                  </p>
                  <p>
                    <strong>到站月台:</strong> {item.plat}
                  </p>
                </div>
              ))
            ) : (
              <p>{schedule.message}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
