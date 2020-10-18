import React, { useState } from "react";
import "./App.css";

function App() {
  // var divs = [];
  // for (var i = 0; i < 3; i++) {
  //   divs.append("<div>i</div>");
  // }
  var [modalState, setModalStateData] = useState(false);
  var [modalShowState, setModalShowState] = useState();
  let councilData = [
    {
      type: "불면증",
      name: "누워도 잠이 안올 때",
      description: `사람들은 불안하면 잠을 잘 자지 못합니다.

      그리고 잠을 잘 자지 못하면 특별한 이유가 없어도 불안감을 더 느끼게 됩니다.
      이것은 신체적인 긴장 시스템의 작동으로 인해 스트레스에 대응하기 위한 신체의 기본적인 방어 수단입니다.
      하지만, 종종 이러한 방어 수단이 너무 강력해지거나 잘 통제되지 않으면 문제가 생기기 시작합니다.
      만약 하루 이틀 잠을 잘 이루지 못했고, 스트레스가 분명히 있으며 그 스트레스가 단시간 내에 없어지거나 해결될 가능성이 있다면 특별히 치료할 필요는 없습니다.
      시간이 지나고 스트레스가 없어지면 대부분의 불면증상은 자연스럽게 사라지기 때문입니다.`,
    },
    {
      type: "가족",
      name: "가족이랑 잘 지내고 싶어",
      description: `가족 간의 ‘원활한’ 대화는 엄청난 힘을 지닌다.
      한 조사에 따르면 평소 가족과 식사하며 대화하는 횟수가 주 4회 이상인 사람들은 그렇지 않은 사람들에 비해 2배 이상 삶에 대한 만족도가 높았고,
      가족 간의 대화 시간을 즐기는 사람일수록 사회 적응력도 높은 것으로 나타났다.
      반면 대화가 원활하지 못할 경우 부부는 15년 이내 이혼할 확률이 94%나 된다고 한다.
      그만큼 가족 간의 대화는 행복한 삶을 위해 꼭 실천해야 하는 기반인 셈이다.
      하지만 최근 취업 포털 사이트 ‘커리어’에서 직장인을 대상으로 한 설문조사에 따르면 45.2%가 가족과 하루 평균 10분 이상~30분 미만의 대화를 나누고 있으며,
      인구보건복지협회 조사에서는 부부 3쌍 중 1쌍꼴로 서로 하루 10분도 채 대화를 나누지 않는다는 ‘충격적인’ 결과가 나왔다.`,
    },
    {
      type: "공부",
      name: "공부 잘하는 사람들의 비법?!",
      description: `단순함이 실행력을 높이고 스트레스를 줄입니다.

      한 가지 일(설거지)만 주어진 경우와 3가지 일(설거지, 빨래, 밥 짓기)이 한꺼번에 주어진 경우를 생각해봅시다. 한 가지 일을 할 경우보다 3가지 일을 한꺼번에 할 때 한 가지 일에 집중하기 어렵습니다. 우리는 신경 쓸 일을 줄여야 합니다.
      
      전기밥솥으로 밥을 짓고 세탁기에 빨래를 넣으면, 신경을 써야 할 일이 하나로 줄어들게 되어 한 가지 일에 좀 더 집중할 수 있습니다.
      공부도 마찬가지입니다. 최대한 생각할 것들을 없애야 합니다.`,
    },
  ];

  return (
    <div className="council-wrap">
      {councilData.map(function (council, i) {
        return (
          <div key={i}>
            <h3>{council.type}</h3>
            <button
              onClick={() => {
                setModalShowState(councilData[i].description);
                setModalStateData(!modalState);
              }}
            >
              button
            </button>
            <p>{council.name}</p>
          </div>
        );
      })}
      <div>
        {modalState ? (
          <Modal modalShowState={modalShowState} councilData={councilData} />
        ) : null}
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal-page">
      <p>{props.modalShowState}</p>
    </div>
  );
}

export default App;
