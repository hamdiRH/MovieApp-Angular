export interface IMovie {
    _id: string;
    title: string;
    rate: number;
    date: string | number;
    imgUrl: string;
    description: string;
    category: string;
  }
  
  export const Movies: IMovie[] = [
    
    {
      _id: '6074383d0c3d1721183fd129',
      title: "Fast & Furious Presents: Hobbs & Shaw",
      rate: 4.4,
      date: '2019',
      imgUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-VY5cjeq-HcRzfG3ofhcEhXFE06-Ev2xohkP9pY3MKNrkgRxp',
      description:
        "US agent Luke Hobbs and British mercenary Deckard Shaw are forced to put their rivalry side and work together to stop a genetically enhanced supervillain.",
      category: '  Action | Buddy ',
    },
    {
      _id: '6074370322c7d3ec23eb1689',
      title: "Secret Magic Control Agency",
      rate: 4.4,
      date: '2021',
      imgUrl:
        'https://pics.filmaffinity.com/The_Snow_Queen_Mirrorlands-493313156-large.jpg',
      description:
        "Hansel and Gretel of fairy-tale fame -- now acting as secret agents -- must use magic, clever thinking and teamwork on a mission to find a missing king.",
      category: ' Adventure | Comedy ',
    },
    {
      _id: '6074358dcbfbd6b4bbe69659',
      title: "Outside the Wire",
      rate: 3,
      date: '2021',
      imgUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR0GFpulAjq-0O6_v8bmkY_s18v4p8O4S5U82fp0sPR8kLzwwSh',
      description:
        "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack",
      category: 'Action',
    },
    {
      _id: '5fedeef47c0ffe00176db1ca',
      title: "Devil's Mile",
      rate: 4,
      date: '2014',
      imgUrl:
        'https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg',
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
      category: 'Action | Crime',
    },
    {
      _id: '5fedefe47c0ffe00176db1cb',
      title: 'Once Upon A Time In The west',
      rate: 5,
      date: '1968',
      imgUrl:
        'https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg',
      description:
        'A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.',
      category: 'Western',
    },
  ];