export const PACKAGE_STATES = {
  SELECT: 'select the state where the package is located',
  DELAWARE: '(DE)delaware',
  DISTRICT_OF_COLUMBIA: '(DC)district of columbia',
  ILLINOIS: '(IL)illinois',
  INDIANA: '(IN)indiana',
  IOWA: '(IA)iowa',
  KENTUCKY: '(KY)kentucky',
  MARYLAND: '(MD)maryland',
  MICHIGAN: '(MI)michigan',
  MINNESOTA: '(MN)minnesota',
  MISSOURI: '(MO)missouri',
  NEBRASKA: '(NE)nebraska',
  NEW_JERSEY: '(NJ)new jersey',
  OHIO: '(OH)ohio',
  PENNSYLVANIA: '(PA)pennsylvania',
  VIRGINIA: '(VA)virginia',
  WISCONSIN: '(WI)wisconsin',
  WEST_VIRGINIA: '(WV)west virginia',
};
export const PACKAGE_STATES_STRICT = {
  DELAWARE: '(DE)delaware',
  DISTRICT_OF_COLUMBIA: '(DC)district of columbia',
  ILLINOIS: '(IL)illinois',
  INDIANA: '(IN)indiana',
  IOWA: '(IA)iowa',
  KENTUCKY: '(KY)kentucky',
  MARYLAND: '(MD)maryland',
  MICHIGAN: '(MI)michigan',
  MINNESOTA: '(MN)minnesota',
  MISSOURI: '(MO)missouri',
  NEBRASKA: '(NE)nebraska',
  NEW_JERSEY: '(NJ)new jersey',
  OHIO: '(OH)ohio',
  PENNSYLVANIA: '(PA)pennsylvania',
  VIRGINIA: '(VA)virginia',
  WISCONSIN: '(WI)wisconsin',
  WEST_VIRGINIA: '(WV)west virginia',
};

export const DESTINATION_COUNTRIES = {
  SELECT: 'destination country',
  // BENIN: 'benin',
  CAMEROON: 'cameroon',
  CENTRAL_AFRICA: 'central africa',
  // CONGO: 'congo',
  EQUATORIAL_GUINEA: 'equatorial guinea',
  GABON: 'gabon',
  // GHANA: 'ghana',
  // IVORY_COST: 'ivory cost',
  // LIBERIA: 'liberia',
  // NIGERIA: 'nigeria',
  // SIERRA_LEONE: 'sierra leone',
  TCHAD: 'tchad',
  // TOGO: 'togo',
};
export const DESTINATION_COUNTRIES_STRICT = {
  // BENIN: 'benin',
  CAMEROON: 'cameroon',
  CENTRAL_AFRICA: 'central africa',
  // CONGO: 'congo',
  EQUATORIAL_GUINEA: 'equatorial guinea',
  GABON: 'gabon',
  // GHANA: 'ghana',
  // IVORY_COST: 'ivory cost',
  // LIBERIA: 'liberia',
  // NIGERIA: 'nigeria',
  // SIERRA_LEONE: 'sierra leone',
  TCHAD: 'tchad',
  // TOGO: 'togo',
};
export const NUMBER_OF_ITEMS = {
  SELECT: 'Number of items you are sending',
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
};

export const SENDER_COMMITMENT = {
  PACKAGE_CREATED: 'package created',
  PICKUP_FEE_SENT: 'pickup fee sent',
  SHIPMENT_PAID_IN_FULL: 'shipping fee sent',
};
export const PACKAGE_STATUS = {
  WAITING: 'awaiting pick-up.',
  // PICKED:
  //   'package picked up, on route to our warehouse or on its was to the destination.',
  // CONTAINER: 'in the container awaiting vessel departure.',
  ROUTE1: 'on route to destination.',
  // ROUTE2: 'in route to the destination country(between Anger and Cotonou).',
  // ROUTE3: 'in route to the destination country(between Cotonou and lagos).',
  // ROUTE4: 'in route to the destination country(Between Lagos and Douala).',
  ARRIVED1: 'arrived at port.',
  // ARRIVED2: 'arrived at destination port(Malabo).',
  // ARRIVED3: 'arrived at destination port(Libreville).',
  // ARRIVED4: 'arrived at destination port(Pointe-Noire).',
  DELIVERED: 'delivered',
};

export const DESIRED_SHIPPING_MODE = {
  SELECT: 'Select your shipping mode',
  EXPRESS: 'Air Express(4-8 days)',
  REGULAR: 'Air Regular(6-12 days)',
  MARITIME: 'Sea Container(6-8 weeks)',
};
export const DESIRED_SHIPPING_MODE_STRICT = {
  EXPRESS: 'Air Express(4-8 days)',
  REGULAR: 'Air Regular(6-12 days)',
  MARITIME: 'Sea Container(6-8 weeks)',
};

export const PACKAGE_SORT_BY = {
  NEWEST_FIRST: 'newest',
  OLDEST_FIRST: 'oldest',
  ASCENDING_PACKAGE_STATE: 'package state: a-z',
  DESCENDING_PACKAGE_STATE: 'package state: z-a',
  ASCENDING_DESTINATION_COUNTRY: 'destination country: a-z',
  DESCENDING_DESTINATION_COUNTRY: 'destination country: z-a',
};
