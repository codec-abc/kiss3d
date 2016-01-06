initSidebarItems({"enum":[["ConsumerState","Stores a consumer's current computation state"],["FileProducerState",""],["Input",""],["Move",""]],"fn":[["shift",""]],"struct":[["ChainConsumer","ChainConsumer takes a consumer C1 R -> S, and a consumer C2 S -> T, and makes a consumer R -> T by applying C2 on C1's result"],["FileProducer",""],["MapConsumer","MapConsumer takes a function S -> T and applies it on a consumer producing values of type S"],["MemProducer","A MemProducer generates values from an in memory byte buffer"],["ProducerRepeat","ProducerRepeat takes a single value, and generates it at each step"]],"trait":[["Consumer","The Consumer trait wraps a computation and its state"],["Producer","The producer wraps a data source, like file or network, and applies a consumer on it"]]});