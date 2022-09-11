import { computed } from 'vue';
import { useStore } from 'vuex';


export function useMapper(mapper, mapFn) {
    const store = useStore();

    // 这里是使用 mapState 还是 mapGetters，不能写死，因此换成传入的 mapFn
    const storeStateFns = mapFn(mapper)

    // 对数据进行转换
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({ $store: store });
        storeState[fnKey] = computed(fn)
    })

    return storeState
}