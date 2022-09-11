import { mapGetters, createNamespacedHelpers } from 'vuex';
import { useMapper } from './useMapper';

// export function useGetters(mapper) {
//     return useMapper(mapper, mapGetters)
// }

export function useGetters(moduleName, mapper) {
    let mapperFn = mapGetters
    if (typeof moduleName === "string" && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    } else {
        // 如果没有传入 moduleName，只传入一个数组，那就是从根组件root获取 getters/state
        mapper = moduleName
    }

    return useMapper(mapper, mapperFn)
}