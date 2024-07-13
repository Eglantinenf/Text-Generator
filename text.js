const loremText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Every breath we surrender will turn back the death that continues to inflict on us ... Ultimately, this death is to be won, because it was part of our destiny since our birth and just shortly before devouring its prey, It plays with it. Nevertheless, we continue to live as much as possible with much interest and concern, as long as we may think longer in a soap bubble to become larger, albeit with full certainty. That will burst.',
    'Its not true that the more you love the better you understand. All that love and love wants from me is just the understanding of this wisdom: the other is not recognizable; its mathee is not a vague version of a secret, but it is a certificate that was in play and the show has no place. So Im drowned in love with an anonymous person, who will remain anonymous forever. Siri Sly: I know what I do not know ...!',
    'An old man would see you in the neighborhood every day. A boy with tattered shoes and naked feet playing with plastic balls, went shopping some day and went to the boy and told the boy to put on these shoe pants ... he was wearing a shoe box and happy He said to the old man: "You are God?" The old man picked his lips and said no! The boy said, "God"s friend, because last night I just said to God that I had no shoes ...',
    'Colored pencils were busy except for the white pencil, no one worked for him, everyone said: you do not feel any pain, one night, when the pencil was lost in the darkness of the night, the white pencil stretched out until the morning of the moon and starred so much. That small and small, in the morning he did not fill in his colored pencil box with no color, remember, maybe tomorrow we will not be together ...',
    'When large fortunes fall into the hands of some people, they become strong in the light of it, and in the shadow of strength and wealth they dream that they can live out of their homeland and be happy and proud, they will soon realize that they have made mistakes, and the greatness of every nation On the ruins of his homeland and cease!',
    'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
    'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
    'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
  ];
  
  const amountInputElem = document.querySelector('#amount')
  const generateBtnElem = document.querySelector('button')
  const resultElem = document.querySelector('#result')
  
  generateBtnElem.addEventListener('click', function (event) {
    event.preventDefault()
  
    let amountElemValue = amountInputElem.value // 
    let randomTextIndex = Math.floor(Math.random() * loremText.length)
  
    if (amountElemValue < 0 || amountElemValue > 9 || amountElemValue === '' || isNaN(amountElemValue)) {
      resultElem.innerHTML = loremText[randomTextIndex]
    } else {
      let slicedArray = loremText.slice(0, amountElemValue)
  
      let finalTextsArray = slicedArray.map(function (item) {
        return '<p>'+ item + '</p>'
      }).join('')
  
      resultElem.innerHTML = finalTextsArray
  
      console.log(finalTextsArray);
    }
  
    console.log('Click');
  })
  
  
  /*
  for persian text example : 
    // 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    // 'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!'
    // 'پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم…'
  
    :)
  */