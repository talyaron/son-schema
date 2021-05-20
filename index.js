const socrates = {
    type: {
        function: () => { return man },
        corroboration: 1
    }


}

const man = {
    type: {
        function: () => { return Human },
        corroboration: 1
    },
    gender: {
        function: () => { return male },
        corroboration: 1
    }

}

const Human = {
    mortal: {
        function: () => { return true },
        corroboration: 1
    },
    height: {
        function: (age, gender, nutrition, rest) => { return some_function_specific_for_humans_with_some_probability },
        corroboration: .6
    }
}

const swan = {
    type: {
        function: () => { return Swans },
        corroboration: 1
    }
}

const Swans = {
    color: {

        function: () => {
            return {
                white: 0.999,
                black: 0.001
            }
        },
        corroboration: 1
    },

    height_alt1: {
        function: (age, gender, nutrition, rest) => { return some_function_specific_for_humans_with_some_probability },
        corroboration: .5
    },
    height_alt2: {
        function: (age, gender, nutrition, rest) => { if (age > 1) return about_70cm },
        corroboration: .1
    }
}


const height = {
    function: () => { return distance_from_bottom_to_top },
    corroboration: 1
}

const _er = {
    function: () => { return more_than },
    corroboration: 1
}