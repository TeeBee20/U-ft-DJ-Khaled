const Lyric = (props) => {
  const { vibe } = props;
  const lyrics = {
    HYPE: [
      `Got money on my mind, I can never get enough`,
      `I’m just feeling like the throne is for the taking—watch me take it`,
      `This in my veins and it gets to my heart`,
      `I do it for the hood cause the hood told me I could`,
      `That's the definition of a major key alert`,
    ],
    "2AM": [
      `Diamonds ain't nothing when I'm rockin' with ya`,
      `Holla at me, what it do, what it is?`,
      `I got girls that'll cancel a flight back home`,
      `You the type that can make me prioritize`,
      `You reply, what's your sign? You're a Gemini`,
    ],
    GRIND: [
      `They want too much for the taxes, I got my money in walls`,
      `Suffering from success...`,
      `Busy at the crib, cookin' salmon with the lobster`,
      `Naw, naw, piece of cake, naw, naw, Turks and Caic', yeah, yeah`,
      `They don't like to see when we win, but I did it`,
    ],
    TRIPPIN: [
      `You haters can't stop me, I'm a franchise`,
      `Cause I'm rich, homie, it's why you feel some kind of way`,
      `Stuntin', real hundreds, they know how we comin'`,
      `Went to job interviews, they ain't call us back`,
      `If all your jewels fake, how we gon' believe ya`,
    ],
  };

  const randomIndex = () => {
    return Math.floor(Math.random() * 5);
  };
  return (
    <div>
      <p>ANOTHA ONE</p>
      <p>{lyrics[vibe][randomIndex()]}</p>
      <p>{lyrics[vibe][randomIndex()]}</p>
      <p>{lyrics[vibe][randomIndex()]}</p>

      <p>WE DA BEST MUSIK</p>
      <p>WE DA BEST REACT APP</p>
    </div>
  );
};

export default Lyric;
