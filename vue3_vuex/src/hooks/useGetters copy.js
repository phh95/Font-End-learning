import { computed } from 'vue';
import { mapGetters, useStore } from 'vuex';


export function useGetters(mapper) {
    const store = useStore();

    const storeGettersFns = mapGetters(mapper)
    const storeGetters = {}
    Object.keys(storeGettersFns).forEach(fnKey => {
        const fn = storeGettersFns[fnKey].bind({ $store: store });
        storeGetters[fnKey] = computed(fn)
    })

    return storeGetters
}