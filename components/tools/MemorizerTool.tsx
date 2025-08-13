'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, RotateCcw, Download, Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react'

const MemorizerTool = () => {
  const [inputText, setInputText] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSample, setSelectedSample] = useState('earth')

  const sampleTexts = {
    earth: `I am the Earth
And the Earth is me.
Each blade of grass,
Each honey tree,
Each bit of mud,
And stick and stone
Is blood and muscle,
Skin and bone.

- Jane Yolen`,
    
    albatros: `L'Albatros

Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.

À peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.

Ce voyageur ailé, comme il est gauche et veule !
Lui, naguère si beau, qu'il est comique et laid !
L'un agace son bec avec un brûle-gueule,
L'autre mime, en boitant, l'infirme qui volait !

Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    
    baudelaire: `Je ne t'ai pas connu, je ne t'ai pas aimé,
Je ne te connais point et je t'aime encor moins :
Je me chargerais mal de ton nom diffamé,
Et si j'ai quelque droit d'être entre tes témoins,

C'est que, d'abord, et c'est qu'ailleurs, vers les Pieds joints
D'abord par les clous froids, puis par l'élan pâmé
Des femmes de péché – desquelles ô tant oints,
Tant baisés, chrême fol et baiser affamé ! –

Tu tombas, tu prias, comme moi, comme toutes
Les âmes que la faim et la soif sur les routes
Poussaient belles d'espoir au Calvaire touché !

– Calvaire juste et vrai, Calvaire où, donc, ces doutes,
Ci, çà, grimaces, art, pleurent de leurs déroutes.
Hein ? mourir simplement, nous, hommes de péché.`
  }

  const convertToBlanks = (text: string) => {
    if (!text.trim()) return ''
    
    return text.split('\n').map((line, lineIndex) => {
      console.log(`\n--- Processing line ${lineIndex + 1}: "${line}" ---`)
      const words = line.split(' ')
      console.log(`Words in line: [${words.map(w => `"${w}"`).join(', ')}]`)
      
      return words.map((word, wordIndex) => {
        // Clean the word of punctuation for length calculation
        const cleanWord = word.replace(/[^\w]/g, '')
        
        // Debug logging
        console.log(`Word ${wordIndex + 1}: "${word}" -> clean: "${cleanWord}" (length: ${cleanWord.length})`)
        
        // Only keep 1-letter words unchanged, blank everything else
        if (cleanWord.length <= 1) {
          console.log(`  -> Keeping 1-letter word: "${word}"`)
          return word
        }
        
        // Keep the first letter, add one underscore per remaining letter
        const firstLetter = word.charAt(0)
        const remainingLength = cleanWord.length - 1
        const underscores = '_'.repeat(remainingLength)
        
        // Preserve punctuation at the end
        const punctuation = word.match(/[^\w]*$/)?.[0] || ''
        const result = firstLetter + underscores + punctuation
        
        console.log(`  -> Blanking: "${word}" -> "${result}" (${cleanWord.length} letters: ${firstLetter} + ${remainingLength} underscores + "${punctuation}")`)
        return result
      }).join(' ')
    }).join('\n')
  }

  const convertToFirstWords = (text: string) => {
    if (!text.trim()) return ''
    
    return text.split('\n').map(line => {
      const words = line.split(' ')
      if (words.length === 0) return ''
      
      // Take only the first word, truncate if it's too long
      const firstWord = words[0]
      if (firstWord.length <= 20) {
        return firstWord
      } else {
        return firstWord.substring(0, 8)
      }
    }).join('\n')
  }

  const handleSample = (sampleKey: string) => {
    const sample = sampleTexts[sampleKey as keyof typeof sampleTexts]
    setInputText(sample)
    setSelectedSample(sampleKey)
    setCurrentStep(1)
  }

  const handleClear = () => {
    setInputText('')
    setCurrentStep(1)
    setSelectedSample('earth')
  }

  const handleCopy = async () => {
    try {
      let textToCopy = ''
      if (currentStep === 1) textToCopy = inputText
      else if (currentStep === 2) textToCopy = convertToBlanks(inputText)
      else textToCopy = convertToFirstWords(inputText)
      
      await navigator.clipboard.writeText(textToCopy)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleDownload = () => {
    let textToDownload = ''
    let filename = ''
    
    if (currentStep === 1) {
      textToDownload = inputText
      filename = 'original-text.txt'
    } else if (currentStep === 2) {
      textToDownload = convertToBlanks(inputText)
      filename = 'memorization-exercise.txt'
    } else {
      textToDownload = convertToFirstWords(inputText)
      filename = 'first-words.txt'
    }
    
    const element = document.createElement('a')
    const file = new Blob([textToDownload], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "First, read the text completely"
      case 2: return "Secondly, practice with blanks"
      case 3: return "Thirdly, say it without pausing"
      default: return ""
    }
  }

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return "Read through the entire text to understand it."
      case 2: return "Practice with strategic word blanks to test your memory."
      case 3: return "Below are the first words of each line."
      default: return ""
    }
  }

  const getCurrentContent = () => {
    if (!inputText.trim()) return ''
    
    switch (currentStep) {
      case 1: return inputText
      case 2: return convertToBlanks(inputText)
      case 3: return convertToFirstWords(inputText)
      default: return inputText
    }
  }

  // Calculate textarea height based on content length
  const getTextareaHeight = (text: string) => {
    const lines = text.split('\n').length
    if (lines <= 20) return 'h-80'
    if (lines <= 50) return 'h-96'
    return 'h-[32rem]'
  }

  return (
    <section id="tool" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
            Your <span className="gradient-text">Memorization Tool</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Follow the 3-step progression to memorize any text effectively. 
            Perfect for poems, speeches, scripts, and more.
          </p>
        </motion.div>

        {/* Tool Interface */}
        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => handleSample('earth')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSample === 'earth' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-secondary-600 hover:bg-primary-50'
                  }`}
                >
                  Earth Poem
                </button>
                <button
                  onClick={() => handleSample('albatros')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSample === 'albatros' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-secondary-600 hover:bg-primary-50'
                  }`}
                >
                  L'Albatros
                </button>
                <button
                  onClick={() => handleSample('baudelaire')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedSample === 'baudelaire' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-secondary-600 hover:bg-primary-50'
                  }`}
                >
                  Baudelaire
                </button>
              </div>
              
              <button
                onClick={handleClear}
                className="btn-secondary"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear
              </button>
            </div>
          </motion.div>

          {/* Step Navigation */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`w-10 h-10 rounded-full font-bold transition-colors ${
                    currentStep === step
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-200 text-secondary-600 hover:bg-secondary-300'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-2xl shadow-xl border border-secondary-200 overflow-hidden">
            {/* Step Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{getStepTitle()}</h3>
              <p className="text-primary-100">{getStepDescription()}</p>
            </div>

            {/* Content Pane */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Text Area */}
                  <textarea
                    value={getCurrentContent()}
                    onChange={(e) => {
                      if (currentStep === 1) {
                        setInputText(e.target.value)
                      }
                    }}
                    readOnly={currentStep !== 1}
                    placeholder={currentStep === 1 ? "Paste your text here..." : "Your text will appear here..."}
                    className={`w-full p-4 border border-secondary-200 rounded-xl resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm leading-relaxed ${
                      currentStep === 1 
                        ? 'bg-white' // Editable - white background
                        : 'bg-secondary-50' // Read-only - grey background
                    } ${getTextareaHeight(getCurrentContent())}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons - Inside the frame at bottom */}
            <div className="bg-secondary-50 px-6 py-4 flex justify-between items-center">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-secondary-200 text-secondary-700 hover:bg-secondary-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              
              <button
                onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                disabled={currentStep === 3}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-secondary-200 text-secondary-700 hover:bg-secondary-300"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons - Outside the frame */}
          {getCurrentContent().trim() && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex space-x-3 justify-center"
            >
              <button
                onClick={handleCopy}
                className="btn-secondary flex items-center justify-center px-8"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </button>
              <button
                onClick={handleDownload}
                className="btn-secondary flex items-center justify-center px-8"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </motion.div>
          )}

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-4 text-center">
              How to Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Read Completely</h4>
                <p className="text-secondary-600 text-sm">
                  Start with the full text to understand the content
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">Practice with Blanks</h4>
                <p className="text-secondary-600 text-sm">
                  Use strategic word blanks to test your memory
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-2">First Words Only</h4>
                <p className="text-secondary-600 text-sm">
                  Use just the first words as final memory cues
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MemorizerTool
