
<script>
import json from "../assets/Json/Colombia.json";
import { ref, computed } from "vue";

export default {
    name: "Select",
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
    },
    setup() {
        const dataColombia = ref(json);
        const selectedDepartment = ref(null);
        const selectedCity = ref(null);

        const departments = computed(() => {
            return dataColombia.value.map((s) => ({
                value: s.departamento,
                text: s.departamento,
            }));
        });

        const cities = computed(() => {
            if (selectedDepartment.value) {
                const department = dataColombia.value.find(
                    (s) => s.departamento === selectedDepartment.value
                );
                if (department) {
                    return department.ciudades.map((c) => ({
                        value: c,
                        text: c,
                    }));
                }
            }
            return [];
        });

        return {
            selectedDepartment,
            selectedCity,
            departments,
            cities,
        };
    },
};
</script>


<template>
    <div class="Select">
        <div class="Select__Box">
            <span class="Select__Box__Span">Departamento</span>
            <select class="Select__Box__field" name="Departamentos options" id="1" v-model="selectedDepartment">
                <option class="Select__Box__field__character" disabled selected value="Selecionar departamento">Seleccionar departamento</option>
                <option class="Select__Box__field__character" v-for="(departamento, index) in departments" :key="index"
                    :value="departamento.value">
                    {{ departamento.text }}
                </option>
            </select>
        </div>
        <div class="Select__Box">
            <span class="Select__Box__Span">Ciudad</span>
            <select class="Select__Box__field" name="Cities options" id="2" v-model="selectedCity">
                <option class="Select__Box__field__character" disabled selected value="">Seleccionar ciudad</option>
                <option class="Select__Box__field__character" v-for="(ciudad, index) in cities" :key="index"
                    :value="ciudad.value">
                    {{ ciudad.text }}
                </option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";

.Select {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    align-items: flex-start;
    width: 100%;
    height: auto;
    &__Box {
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
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
}


@include bwtValueWidth(1200px, 1400px) {
    .Select {
        &__Box {
            &__Span {
                font-size: 18px;
            }
            &__field {
                height: 45px;
                font-size: 18px;
            }
        }
    }
}

@include mobile() {
    .Select {
        flex-direction: column;
        gap: 30px;
        align-items: center;
        &__Box {
            width: 85%;
            &__Span {
                font-size: 18px;
            }
            &__field {
                height: 40px;
                font-size: 18px;
            }
        }
    }
}

@include xs() {
    .Select {
        &__Box {
            &__Span {
                font-size: 15px;
            }
            &__field {
                height: 35px;
                font-size: 15px;
            }
        }
    }
}
</style>