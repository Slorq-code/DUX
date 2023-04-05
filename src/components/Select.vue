<script>
import json from "../assets/Json/Colombia.json"
import { ref, computed } from 'vue';

export default {
    name: "Select",
    props: {
        label1: {
            type: String,
            required: true,
        },
        label2: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    setup() {
        const dataColombia = ref(json);
        const selectedDepartment = ref(null);

        const departments = computed(() => {
            return dataColombia.value.map(s => ({
                value: s.departamento,
                text: s.departamento
            }));
        });

        const cities = computed(() => {
            if (selectedDepartment.value) {
                const department = dataColombia.value.find(s => s.departamento === selectedDepartment.value);
                if (department) {
                    return department.ciudades.map(c => ({
                        value: c,
                        text: c
                    }));
                }
            }
            return [];
        });

        return {
            selectedDepartment,
            departments,
            cities
        };
    }
};
</script>


<template>
    <div class="Select">
        <span class="Select__Span">{{ label1 }}</span>
        <select class="Select__field" name="Departamentos options" id="1" v-model="selectedDepartment">
            <option class="Select__field__character" disabled selected value="Selecionar departamento">Seleccionar departamento</option>
            <option class="Select__field__character" v-for="(departamento, index) in departments" :key="index" :value="departamento.value">{{departamento.text}}</option>
        </select>
        <br>
        <span class="Select__Span">{{ label2 }}</span>
        <select class="Select__field" name="Cities options" id="2">
            <option class="Select__field__character" disabled selected value="">Seleccionar ciudad</option>
            <option class="Select__field__character" v-for="(ciudad, index) in cities" :key="index" :value="ciudad.value">{{ciudad.text}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.Select {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;

    &__Span {
        color: white;
        font-family: MyriadPro;
        font-size: 25px;
    }

    &__field {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        background: #FFFAE5 0% 0% no-repeat padding-box;
        border: 1px solid #F7D756;
        text-align: center;
        color: #D3C68A;
        font-family: MyriadPro;
        font-size: 25px;
    }
}


@include bwtValueWidth(1200px, 1400px) { 
    .Select {
        &__Span{
            font-size: 18px;
        }
        &__field{
            height: 45px;
            font-size: 18px;
        }
    }
}

@include mobile() { 
    .Select {
        &__Span{
            font-size: 18px;
        }
        &__field{
            height: 40px;
            font-size: 18px;
        }
    }
}

@include xs() { 
    .Select {
        &__Span{
            font-size: 15px;
        }
        &__field{
            height: 35px;
            font-size: 15px;
        }
    }
}


</style>
