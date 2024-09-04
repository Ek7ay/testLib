<template>
  <div>
    <div>
      <Selector
        :data="options"
        @select-change="setTargetIndex"
      ></Selector>
    </div>
    <div class='transfer'>
      <div 
        class="box left-list"
        @dragover.prevent
        @drop="removeRightListData([dragedItem])"
      >
        <list-title
          :title="leftTitle"
        ></list-title>
        <div>
          <list-item
            :data="leftListData"
            left-or-right="left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
        </div>
      </div>

      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></button-group>

      <div 
        class="box right-list"
        @dragover.prevent
        @drop="addRightListData([dragedItem])"
      >
        <list-title
          :title="rightTitle"
        ></list-title>
        <div>
          <list-item
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Selector from './Selector.vue'
import ListTitle from './ListTitle.vue'
import ButtonGroup from './ButtonGroup.vue'
import ListItem from './ListItem.vue'

defineOptions({ name: 'Transfer' })
const props = defineProps({
  data: {
    type: Array,
    default: () => {}
  },
  rightTitle: {
    type: String,
    default: '已选择'
  }
})
import { 
  useTargetIndex, 
  useComputedData, 
  useRightListData, 
  useCheckedData,
  useDragedItem
} from '../../hooks/index'

const options = props.data.map(({title}) => title)
const {targetIndex, setTargetIndex} = useTargetIndex(0)
const [checkedData,
      addCheckedData,
      removeCheckedData
  ] = useCheckedData();
const [
  rightListData, 
  addRightListData, 
  removeRightListData
] = useRightListData([], checkedData)

const [
  dragedItem,
  setDragedItem
] = useDragedItem()

const { 
  leftTitle, 
  leftListData,
  transferButtonDisabled
 } = useComputedData(props.data, targetIndex, rightListData, checkedData)

const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
}

</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
  .box {
    width: 120px;
    height: 100%;
  }
}
</style>