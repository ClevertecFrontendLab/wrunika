import {
    appetizerIcon,
    avatar,
    avatar1,
    avatar2,
    cabbageCutlet,
    dessertIcon,
    drinksIcon,
    firstCoursesIcon,
    fricandelLentil,
    garlicPotato,
    generalIcon,
    grilledIcon,
    ham,
    healthSalad,
    healthyFoodIcon,
    kidsDishesIcon,
    lasagneVegetable,
    liked,
    mushroomsSoup,
    nationalDishesIcon,
    noodleChicken,
    pancakes,
    potatoRolls,
    potatoWithSweetPepper,
    puri,
    saladIcon,
    saucesIcon,
    saved,
    secondCoursesIcon,
    spaghetti,
    tomYam,
    vegansIcon,
    watched,
} from '~/assets';
import { Author, CardItem, Item, NavItem, User } from '~/utils';

export const newRecipesItems: CardItem[] = [
    {
        id: 1,
        dishImage: mushroomsSoup,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Первые блюда',
            badgeIcon: firstCoursesIcon,
            badgeNotifications: [{ icon: saved, count: 1 }],
        },
    },
    {
        id: 2,
        dishImage: cabbageCutlet,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        badgeInfo: {
            badgeTitle: 'Веганские блюда',
            badgeIcon: firstCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 1 },
                { icon: liked, count: 2 },
            ],
        },
    },
    {
        id: 3,
        dishImage: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeInfo: {
            badgeTitle: 'Десерты, выпечка',
            badgeIcon: firstCoursesIcon,
            badgeNotifications: [{ icon: liked, count: 1 }],
        },
    },
    {
        id: 4,
        dishImage: healthSalad,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        badgeInfo: {
            badgeTitle: 'Салаты',
            badgeIcon: firstCoursesIcon,
        },
    },
    {
        id: 5,
        dishImage: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeInfo: {
            badgeTitle: 'Десерты, выпечка',
            badgeIcon: firstCoursesIcon,
            badgeNotifications: [{ icon: liked, count: 1 }],
        },
    },
    {
        id: 6,
        dishImage: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeInfo: {
            badgeTitle: 'Десерты, выпечка',
            badgeIcon: firstCoursesIcon,
            badgeNotifications: [{ icon: liked, count: 1 }],
        },
    },
];

export const navMenuItems: NavItem[] = [
    {
        id: 1,
        title: 'Салаты',
        icon: saladIcon,
        options: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
    },
    {
        id: 2,
        title: 'Закуски',
        icon: appetizerIcon,
        options: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Теплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
    {
        id: 3,
        title: 'Первые блюда',
        icon: firstCoursesIcon,
        options: ['Мясные супы', 'Овощные супы', 'Бульоны', 'Холодные супы', 'Диетические супы'],
    },
    {
        id: 4,
        title: 'Вторые блюда',
        icon: secondCoursesIcon,
        options: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
            'Пельмени, вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Пицца',
            'Суши',
        ],
    },
    {
        id: 5,
        title: 'Десерты, выпечка',
        icon: dessertIcon,
        options: [
            'Блины и оладьи',
            'Пироги и пончики',
            'Торты',
            'Рулеты',
            'Кексы и маффины',
            'Сырники и ватрушки',
            'Из слоеного теста',
            'Из заварного теста',
            'Из дрожжевого теста',
            'Булочки и сдоба',
            'Хлеб',
            'Тесто на пиццу',
            'Кремы',
        ],
    },
    {
        id: 6,
        title: 'Блюда на гриле',
        icon: grilledIcon,
        options: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
    },
    {
        id: 7,
        title: 'Веганская кухня',
        icon: vegansIcon,
        options: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Выпечка',
            'Сыроедческие блюда',
            'Напитки',
        ],
    },
    {
        id: 8,
        title: 'Детские блюда',
        icon: kidsDishesIcon,
        options: [
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Выпечка',
            'Без глютена',
            'Без сахара',
            'Без аллергенов',
            'Блюда для прикорма',
        ],
    },
    {
        id: 9,
        title: 'Лечебное питание',
        icon: healthyFoodIcon,
        options: [
            'Детская диета',
            'Диета №1',
            'Диета №2',
            'Диета №3',
            'Диета №4',
            'Диета №5',
            'Диета №6',
            'Диета №7',
            'Диета №8',
            'Диета №9',
            'Диета №10',
            'Диета №11',
            'Диета №12',
            'Диета №13',
            'Диета №14',
            'Без глютена',
            'Без аллергенов',
        ],
    },
    {
        id: 10,
        title: 'Национальные',
        icon: nationalDishesIcon,
        options: [
            'Американская кухня',
            'Армянская кухня',
            'Греческая кухня',
            'Грузинская кухня',
            'Итальянская кухня',
            'Испанская кухня',
            'Китайская кухня',
            'Мексиканская кухня',
            'Паназиатская кухня',
            'Русская кухня',
            'Турецкая кухня',
            'Французская кухня',
            'Шведская кухня',
            'Японская кухня',
            'Другая кухня',
        ],
    },
    {
        id: 11,
        title: 'Соусы',
        icon: saucesIcon,
        options: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
    },
    {
        id: 12,
        title: 'Напитки',
        icon: drinksIcon,
        options: [
            'Мясные заготовки',
            'Рыбные заготовки',
            'Из огурцов',
            'Из томатов',
            'Из грибов',
            'Овощные заготовки',
            'Салаты, икра',
            'Из фруктов и ягод',
        ],
    },
    {
        id: 13,
        title: 'Заготовки',
        icon: generalIcon,
        options: [
            'Соки и фреши',
            'Смузи',
            'Компоты',
            'Кисели',
            'Кофе',
            'Лечебный чай',
            'Квас',
            'Коктейли',
            'Алкогольные',
        ],
    },
];

export const juiciestFoodItems: CardItem[] = [
    {
        id: 1,
        dishImage: spaghetti,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 2,
        dishImage: ham,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 159 },
                { icon: liked, count: 257 },
            ],
        },
        recommendation: {
            avatar: avatar,
            name: 'Елена Высоцкая',
        },
    },
    {
        id: 3,
        dishImage: noodleChicken,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 256 },
                { icon: liked, count: 342 },
            ],
        },
        recommendation: {
            avatar: avatar2,
            name: 'Alex Cook',
        },
    },
    {
        id: 4,
        dishImage: tomYam,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 124 },
                { icon: liked, count: 324 },
            ],
        },
    },
];

export const veganCuisineItemsWithoutImages: Omit<CardItem, 'dishImage'>[] = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 1 },
                { icon: liked, count: 1 },
            ],
        },
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 2 },
                { icon: liked, count: 1 },
            ],
        },
    },
];

export const veganDishes: CardItem[] = [
    {
        id: 1,
        dishImage: potatoWithSweetPepper,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 2,
        dishImage: tomYam,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 124 },
                { icon: liked, count: 324 },
            ],
        },
    },
    {
        id: 3,
        dishImage: fricandelLentil,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 4,
        dishImage: garlicPotato,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 124 },
                { icon: liked, count: 324 },
            ],
        },
    },
    {
        id: 5,
        dishImage: potatoRolls,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badgeInfo: {
            badgeTitle: 'Детские блюда',
            badgeIcon: kidsDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 6,
        dishImage: lasagneVegetable,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badgeInfo: {
            badgeTitle: 'Блюда на гриле',
            badgeIcon: grilledIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 7,
        dishImage: fricandelLentil,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 8,
        dishImage: puri,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 124 },
                { icon: liked, count: 324 },
            ],
        },
    },
];

export const veganCookButtonsItems: Item[] = [
    { id: 1, icon: secondCoursesIcon, title: 'Стейк для вегетарианцев' },
    { id: 2, icon: secondCoursesIcon, title: 'Котлеты из гречки и фасоли' },
    { id: 3, icon: firstCoursesIcon, title: 'Сырный суп с лапшой и брокколи' },
];

export const desertsItemsWithoutImages: Omit<CardItem, 'dishImage'>[] = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        badgeInfo: {
            badgeTitle: 'Детские блюда',
            badgeIcon: kidsDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 1 },
                { icon: liked, count: 1 },
            ],
        },
    },
    {
        id: 2,
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        badgeInfo: {
            badgeTitle: 'Детские блюда',
            badgeIcon: kidsDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 2 },
                { icon: liked, count: 1 },
            ],
        },
    },
];

export const desertsCookButtonsItems: Item[] = [
    { id: 1, icon: kidsDishesIcon, title: 'Домашние сырные палочки' },
    { id: 2, icon: nationalDishesIcon, title: 'Панкейки' },
    { id: 3, icon: vegansIcon, title: 'Воздушное банановое печенье на сковороде' },
];

export const juiciestContentItems: CardItem[] = [
    {
        id: 1,
        dishImage: noodleChicken,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 256 },
                { icon: liked, count: 342 },
            ],
        },
        recommendation: {
            avatar: avatar2,
            name: 'Alex Cook',
        },
    },
    {
        id: 2,
        dishImage: tomYam,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 124 },
                { icon: liked, count: 324 },
            ],
        },
    },
    {
        id: 3,
        dishImage: ham,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 159 },
                { icon: liked, count: 257 },
            ],
        },
        recommendation: {
            avatar: avatar,
            name: 'Елена Высоцкая',
        },
    },
    {
        id: 4,
        dishImage: spaghetti,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 5,
        dishImage: potatoWithSweetPepper,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        badgeInfo: {
            badgeTitle: 'Национальные',
            badgeIcon: nationalDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 6,
        dishImage: potatoRolls,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        badgeInfo: {
            badgeTitle: 'Детские блюда',
            badgeIcon: kidsDishesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 7,
        dishImage: lasagneVegetable,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        badgeInfo: {
            badgeTitle: 'Блюда на гриле',
            badgeIcon: grilledIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
    {
        id: 7,
        dishImage: fricandelLentil,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        badgeInfo: {
            badgeTitle: 'Вторые блюда',
            badgeIcon: secondCoursesIcon,
            badgeNotifications: [
                { icon: saved, count: 85 },
                { icon: liked, count: 152 },
            ],
        },
    },
];

export const authorsItems: Author[] = [
    {
        id: 1,
        user: {
            name: 'Елена Высоцкая',
            nickname: '@elenapovar',
            avatar: avatar1,
        },
        info: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        user: {
            name: 'Alex Cook',
            nickname: '@funtasticooking',
            avatar: avatar2,
        },
        info: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        user: {
            name: 'Екатерина Константинопольская',
            nickname: '@bake_and_pie',
            avatar: avatar,
        },
        info: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export const user: User = {
    name: 'Екатерина Константинопольская',
    nickname: '@bake_and_pie',
    avatar: avatar,
};

export const veganLastBlockData = {
    title: 'Веганская кухня',
    description:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    dishes: veganCuisineItemsWithoutImages,
    buttonsItems: veganCookButtonsItems,
};

export const profileNotificationItems = [
    { id: 1, count: 185, icon: saved },
    { id: 2, count: 589, icon: watched },
    { id: 3, count: 587, icon: liked },
];

export const desertsLastBlockData = {
    title: 'Десерты, выпечка',
    description:
        'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.',
    dishes: desertsItemsWithoutImages,
    buttonsItems: desertsCookButtonsItems,
};
