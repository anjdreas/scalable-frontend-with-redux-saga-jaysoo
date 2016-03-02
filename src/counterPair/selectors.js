import { compose, prop } from 'ramda'
import * as counter from '../counter'
import { name } from './__init__'

// getModel :: State -> Model
export const getModel = prop(name)

// getFirst :: State -> counter.Model
export const getFirst =  compose(counter.selectors.getModel, prop('first'), getModel)

// getSecond :: State -> counter.Model
export const getSecond =  compose(counter.selectors.getModel, prop('second'), getModel)
