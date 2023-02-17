<template>
    <div class="container">
        <div class="grid grid-cols-auto">
            <p class="bg-black text-white font-bold py-2 px-4 rounded w-screen mb-5">
            Screen
            </p>
        </div>
        <div class="grid grid-cols-5 gap-2">
            <div v-for="seat in seats" :key="seat.Id">
             <button v-if="!seat.Sale" :id="seat.Id" :class="{'bg-green-700 hover:bg-green-500': !seat.Selected, 'bg-yellow-700 hover:bg-yellow-500': seat.Selected}"
          class="text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="toggleSeat(seat)">{{seat.Label}}</button>
            <button v-if="seat.Sale" :id="seat.Id" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded">{{seat.Label}}</button>
            </div>
        </div>
        <div class="flex flex-row">
            <select id="totalseats" class="flex-2 w-32 mr-5" @change="backto()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5 flex-auto" @click="choose()">
            Select
            </button>
        </div>
    </div>
    
</template>

<script>
const seat = [];
export default {
    name: 'SelectSeat', 
     methods: {
    toggleSeat(seat) {
      seat.Selected = !seat.Selected;
    },
    backto:function(){
        this.seats.forEach(seat => seat.Selected = false);
    },
    choose:function(){
        let selectedSeats = this.seats.filter(seat => seat.Selected == true);
        if (selectedSeats.length != totalseats.value) {
            alert("jumlah kursi selected tidak sama dengan angka pada dropdown");
            return;
        }
            var seatCode = selectedSeats.map(seat => seat.Label).join(", ");
            selectedSeats.map(seat => seat.Sale = true)
            this.$store.dispatch('insertMovieHistory', {MovieId: this.$route.params.id, SeatCode: seatCode})
            window.location.href = "http://localhost:8080/moviehistory";
        },
    },
    computed: {
        seats() {
            return this.$store.state.seat
        }
    }


    
}
</script>
