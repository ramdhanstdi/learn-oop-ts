type UserType = {
  name: string;
};

interface UserInterface {
  name: string;
}

class User1 implements UserInterface {
  name: string = "tai";
}
