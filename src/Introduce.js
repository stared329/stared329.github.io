import Line from './assets/img/line_01.svg';
import info from './assets/info.json';
import useScrollFadeIn from './hooks';

const Introduce = ({ father, mother, child }) => {
  const handleAccount =
    ({ name: n, bank: b, account: a }) =>
    () => {
      navigator.clipboard.writeText(`${b} ${a} ${n}`);
      alert(`${n}님의 계좌번호
${b} ${a}
복사되었습니다.`);
    };

  const animatedItem = {
    0: useScrollFadeIn('up', 0.8, 0.2),
    1: useScrollFadeIn('up', 0.8, 0.3),
    2: useScrollFadeIn('up', 0.8, 0.4),
    3: useScrollFadeIn('up', 0.8, 0.5),
    4: useScrollFadeIn('up', 0.8, 0.6),
    5: useScrollFadeIn('up', 0.8, 0.7),
    6: useScrollFadeIn('up', 0.8, 0.8),
  };
  return (
    <div className="flex flex-col bg-white h-screen-full justify-evenly">
      <div className="bg-white flex flex-col gap-10 py-8 my-auto">
        <div className="flex flex-col gap-2 justify-center mt-10 mb-4">
          <img
            src={Line}
            alt="botanic line"
            className="w-2/3 mx-auto mb-4"
            {...useScrollFadeIn('down', 1, 0)}
          />
          {[
            '모든 것이 새로워지는 봄날,',
            '사랑하는 두 사람이',
            '새 인생을 시작하려 합니다.',
            '바쁘시더라도 와주셔서',
            '저희 두 사람의 결혼을 축복해 주시고',
            '따뜻한 마음으로 격려해 주신다면',
            '큰 힘이 되겠습니다.',
          ].map((v, i) => (
            <p
              className="w-full text-center"
              key={`poem_${i}`}
              {...animatedItem[i]}
            >
              {v}
            </p>
          ))}
          <img
            src={Line}
            alt="botanic line"
            className="w-2/3 rotate-180 mx-auto mt-4"
            {...useScrollFadeIn('up', 1, 1)}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-1">
            <p className="text-lg" {...useScrollFadeIn('right', 1, 1.2)}>
              {info.gr.father.name}
            </p>
            <p {...useScrollFadeIn('fade', 1, 1.2)}>·</p>
            <p className="text-lg" {...useScrollFadeIn('right', 1, 1.3)}>
              {info.gr.mother.name}
            </p>
            <p {...useScrollFadeIn('fade', 1, 1.3)}>의 차남</p>
            <p
              className="text-xl font-bold mx-1"
              {...useScrollFadeIn('left', 1, 1.5)}
            >
              {info.gr.child.name.substring(1, 3)}
            </p>
          </div>
          <div className="inline-flex items-center gap-1">
            <p className="text-lg" {...useScrollFadeIn('right', 1, 1.2)}>
              {info.br.father.name}
            </p>
            <p {...useScrollFadeIn('fade', 1, 1.2)}>·</p>
            <p className="text-lg" {...useScrollFadeIn('right', 1, 1.3)}>
              {info.br.mother.name}
            </p>
            <p {...useScrollFadeIn('fade', 1, 1.3)}>의 차녀</p>
            <p
              className="text-xl font-bold mx-1"
              {...useScrollFadeIn('left', 1, 1.5)}
            >
              {info.br.child.name.substring(1, 3)}
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('https://environment.ec.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2021-07/banner_v1_1.png?itok=_VO4aRIL')]"
        {...useScrollFadeIn('fade', 1, 1)}
      >
        <div className="flex flex-col py-6 px-10 gap-4 bg-[rgba(84,142,100,0.9)] justify-between text-white">
          <div
            className="inline-flex items-center justify-between"
            {...useScrollFadeIn('fade', 1, 1.3)}
          >
            <p className="w-14 text-right font-light">{father.re}</p>
            <p className="text-lg">{father.name}</p>
            <div className="inline-flex gap-4">
              <a
                href={`tel:${father.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                전화
              </a>
              <a
                href={`sms:${father.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                문자
              </a>
              <span
                className="bg-accent py-1 px-2 text-white rounded-sm cursor-pointer"
                onClick={handleAccount(father)}
              >
                축의
              </span>
            </div>
          </div>
          <div
            className="inline-flex items-center justify-between gap-1"
            {...useScrollFadeIn('fade', 1, 1.4)}
          >
            <p className="w-14 text-right font-light">{mother.re}</p>
            <p className="text-lg">{mother.name}</p>
            <div className="inline-flex gap-4">
              <a
                href={`tel:${mother.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                전화
              </a>
              <a
                href={`sms:${mother.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                문자
              </a>
              <span
                className="bg-accent py-1 px-2 text-white rounded-sm"
                onClick={handleAccount(mother)}
              >
                축의
              </span>
            </div>
          </div>
          <div
            className="inline-flex items-center justify-between gap-1"
            {...useScrollFadeIn('fade', 1, 1.5)}
          >
            <p className="w-14 text-right font-light">{child.re}</p>
            <p className="text-lg">{child.name}</p>
            <div className="inline-flex gap-4">
              <a
                href={`tel:${child.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                전화
              </a>
              <a
                href={`sms:${child.tel}`}
                className="bg-white py-1 px-2 text-back rounded-sm"
              >
                문자
              </a>
              <span
                className="bg-accent py-1 px-2 text-white rounded-sm"
                onClick={handleAccount(child)}
              >
                축의
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
