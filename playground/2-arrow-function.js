const event = {
  name: 'Birthday Party',
  guestList: ['Moinul', 'Jane', 'Mike'],
  printGuestList() {
    const that = this;
    console.log('Guest List for ' + this.name);
    this.guestList.forEach(function (guest) {
      console.log(guest + ' is attending ' + that.name);
    });
  },
};

event.printGuestList();
