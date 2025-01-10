<template>
    <div class="add-spot">
      <h1>Add New Spot</h1>
      <form @submit.prevent="submitSpot">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="spot.name" required />
        </div>
  
        <div>
          <label for="short-description">Short Description:</label>
          <input type="text" id="short-description" v-model="spot.shortDescription" maxlength="500" />
        </div>
  
        <div>
          <label for="long-description">Long Description:</label>
          <textarea id="long-description" v-model="spot.longDescription"></textarea>
        </div>
  
        <div>
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="spot.location" />
        </div>
  
        <div>
          <label for="size">Size (sq. m):</label>
          <input type="number" id="size" v-model.number="spot.size" step="0.01" />
        </div>
  
        <div>
          <label for="price">Price (per night):</label>
          <input type="number" id="price" v-model.number="spot.price" step="0.01" required />
        </div>

        <div class="amenities-section">
            <label>Amenities:</label>
            <div class="amenities-container">
            <div v-for="amenity in amenities" 
                :key="amenity.id" 
                class="amenity-checkbox">
                <input 
                type="checkbox"
                :id="'amenity-' + amenity.id"
                :checked="selectedAmenities.includes(amenity.id)"
                @change="toggleAmenity(amenity.id)"
                >
                <label :for="'amenity-' + amenity.id" class="amenity-label">
                {{ amenity.name }}
                </label>
            </div>
            </div>
            <div class="selected-count" v-if="selectedAmenities.length">
            Selected amenities: {{ selectedAmenities.length }}
            </div>
        </div>
  
        <div>
          <label for="pictures">Upload Pictures:</label>
          <input type="file" id="pictures" multiple @change="handleFileUpload" />
        </div>
  
        <button type="submit">Add Spot</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        spot: {
          name: '',
          shortDescription: '',
          longDescription: '',
          location: '',
          size: null,
          price: null,
        },
        amenities: [],
        selectedAmenities: [],
        pictures: []
      };
    },
    mounted() {
      this.fetchAmenities();
    },
    methods: {
        async fetchAmenities() {
        try {
            const response = await fetch('http://localhost:3000/api/amenities');
            if (!response.ok) {
            throw new Error('Failed to fetch amenities');
            }
            this.amenities = await response.json();
            } catch (error) {
            console.error('Error fetching amenities:', error);
        }
    },

        toggleAmenity(amenityId) {
        const index = this.selectedAmenities.indexOf(amenityId);
        if (index === -1) {
            this.selectedAmenities.push(amenityId);
        } else {
            this.selectedAmenities.splice(index, 1);
        }
    },

      handleFileUpload(event) {
        this.pictures = Array.from(event.target.files);
      },

      submitSpot() {
    const formData = new FormData();
    formData.append('name', this.spot.name);
    formData.append('shortDescription', this.spot.shortDescription);
    formData.append('longDescription', this.spot.longDescription);
    formData.append('location', this.spot.location);
    formData.append('size', this.spot.size);
    formData.append('price', this.spot.price);
    formData.append('amenities', JSON.stringify(this.selectedAmenities));
    
    // Change how we append pictures - don't use array notation
    this.pictures.forEach((file) => {
        formData.append('pictures', file);  // Changed this line
    });

    fetch('http://localhost:3000/api/campingspots', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(() => {
        alert('Spot added successfully!');
        this.$router.push('/');
    })
    .catch(error => {
        console.error('Error adding spot:', error);
        alert('Failed to add spot. Please try again.');
    });
}}}
    
  </script>
  
  <style>
  .add-spot {
    max-width: 600px;
    margin: auto;
    padding: 1em;
    background: #f9f9f9;
    border-radius: 5px;
  }
  .add-spot h1 {
    text-align: center;
  }
  .add-spot form div {
    margin-bottom: 1em;
  }
  .add-spot label {
    display: block;
    margin-bottom: 0.5em;
  }
  .add-spot input,
  .add-spot textarea,
  .add-spot select {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .add-spot button {
    width: 100%;
    padding: 0.7em;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: white;
    font-size: 1em;
    cursor: pointer;
  }
  .add-spot button:hover {
    background-color: #0056b3;
  }
  .amenities-section {
    margin: 1.5em 0;
    }

    .amenities-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.5em;
    max-height: 200px;
    overflow-y: auto;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    }

    .amenity-checkbox {
    display: flex;
    align-items: center;
    padding: 0.5em;
    }

    .amenity-checkbox input[type="checkbox"] {
    width: auto;
    margin-right: 0.5em;
    }

    .amenity-label {
    margin: 0;
    cursor: pointer;
    }
    .selected-count {
    margin-top: 0.5em;
    font-size: 0.9em;
    color: #666;
    }
  </style>
  